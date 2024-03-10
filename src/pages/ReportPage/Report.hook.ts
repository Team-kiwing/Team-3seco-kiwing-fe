import { useMutation } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { notify } from '@/hooks/toast';
import { createClaim } from '@/services/etc';

import { ReportPageConstants } from './Report.const';
import { ReportSubmitProps } from './Report.type';

export const useReportQuestion = () => {
  const navigator = useNavigate();
  const mutation = useMutation({
    mutationFn: ({ content }: { content: string }) => createClaim({ content }),
    onError: () => {
      notify({ type: 'error', text: '에러가 발생했어요.' });
    },
    onSuccess: (res) => {
      if (res) {
        notify({
          type: 'default',
          text: '문의를 완료하였습니다. 최대한 빠르게 반영할게요!',
        });
        navigator('/');
      } else {
        notify({ type: 'error', text: '에러가 발생했어요.' });
      }
    },
  });

  return mutation;
};

export const useReportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ createReport: string }>({
    mode: 'onBlur',
    defaultValues: { createReport: '' },
  });
  const { mutate } = useReportQuestion();

  const onValid: SubmitHandler<ReportSubmitProps> = ({ createReport }) => {
    if (window.confirm(ReportPageConstants.SUBMIT_CONFIRM_MESSAGE)) {
      mutate({ content: createReport });
    } else {
      return;
    }
  };

  const onInValid: SubmitErrorHandler<ReportSubmitProps> = () => {
    if (errors.createReport?.message) {
      notify({ type: 'error', text: errors.createReport?.message });
    }
  };

  const handleSubmitDebounce = debounce(
    () => handleSubmit(onValid, onInValid)(),
    250
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitDebounce();
    }
  };

  return {
    register,
    handleSubmit,
    onValid,
    onInValid,
    handleKeyPress,
    errors,
  };
};
