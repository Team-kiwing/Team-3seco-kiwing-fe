import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { notify } from '@/hooks/toast';

import Button from '../Button';
import Textarea from '../Textarea';
import {
  QuestionCardConstants,
  QuestionCardModalValidation,
} from './QuestionCard.const';
import { useReportQuestion } from './QuestionCard.hook';

export const QuestionCardModal = ({ questionId }: { questionId: number }) => {
  const { mutate } = useReportQuestion();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ reportField: string }>({
    mode: 'onChange',
    defaultValues: { reportField: '' },
  });

  const onValid: SubmitHandler<{ reportField: string }> = ({ reportField }) => {
    mutate({ id: questionId, reason: reportField });
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
