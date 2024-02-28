import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { notify } from '@/hooks/toast';
import { modalStore } from '@/stores';

import Button from '../Button';
import Textarea from '../Textarea';
import {
  QuestionCardConstants,
  QuestionCardModalValidation,
} from './QuestionCard.const';

export const QuestionCardModal = () => {
  const { closeModal } = modalStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ reportField: string }>({
    mode: 'onChange',
    defaultValues: { reportField: '' },
  });

  const onValid: SubmitHandler<{ reportField: string }> = ({ reportField }) => {
    // todo 신고 제출 API 연동
    // API fail 에러는 현재 로직에서 처리함
    console.log(reportField);

    // 성공시
    notify({
      type: 'default',
      text: '신고를 완료하였습니다. 불편을 드려 죄송합니다.',
    });
    closeModal();
  };

  const onInValid: SubmitErrorHandler<{ reportField: string }> = () => {
    if (errors.reportField?.message) {
      notify({ type: 'error', text: errors.reportField?.message });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <div style={{ maxHeight: '50rem', maxWidth: '30rem' }}>
          <Textarea
            {...register('reportField', QuestionCardModalValidation)}
            width="100%"
            height="20rem"
            placeholder={QuestionCardConstants.MODAL_TEXTAREA_PLACEHOLDER}
            errorMessage={errors.reportField?.message}
          />
          <Button
            style={{ marginTop: '1rem' }}
            text={QuestionCardConstants.MODAL_BUTTON_TEXT}
            width="100%"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};
