import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { notify } from '@/hooks/toast';

import Button from '../Button';
import Textarea from '../Textarea';

export const QuestionCardModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ reportField: string }>({
    mode: 'onChange',
    defaultValues: { reportField: '' },
  });

  const onValid: SubmitHandler<{ reportField: string }> = ({ reportField }) => {
    // todo API 연동
    console.log(reportField);
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
            {...register('reportField', {
              required: {
                value: true,
                message: '신고 사유를 작성해주세요.',
              },
              minLength: {
                value: 10,
                message: '신고 메세지는 10자 이상 작성해주세요.',
              },
            })}
            width="100%"
            height="20rem"
            placeholder="신고 내용을 작성해주세요."
            errorMessage={errors.reportField?.message}
          />
          <Button
            style={{ marginTop: '1rem' }}
            text="신고하기"
            width="100%"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};
