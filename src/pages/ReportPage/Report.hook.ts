import { debounce } from 'lodash';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { notify } from '@/hooks/toast';

import { ReportPageConstants } from './Report.const';
import { ReportSubmitProps } from './Report.type';

export const useReportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ createReport: string }>({
    mode: 'onChange',
    defaultValues: { createReport: '' },
  });

  const onValid: SubmitHandler<ReportSubmitProps> = ({ createReport }) => {
    if (window.confirm(ReportPageConstants.SUBMIT_CONFIRM_MESSAGE)) {
      // todo API 연동
      console.log(createReport);
      notify({
        type: 'default',
        text: ReportPageConstants.NOTIFY_REPORT_SUCCESS_MESSAGE,
      });
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
