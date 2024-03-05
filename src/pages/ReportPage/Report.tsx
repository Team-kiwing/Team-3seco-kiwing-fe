import { debounce } from 'lodash';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Textarea from '@/components/common/Textarea';
import { notify } from '@/hooks/toast';

import { ReportContentValidation, ReportPageConstants } from './Report.const';

const Report = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ createReport: string }>({
    mode: 'onChange',
    defaultValues: { createReport: '' },
  });

  const onValid: SubmitHandler<{ createReport: string }> = ({
    createReport,
  }) => {
    // todo 문의 제출 API 연동
    // API fail 에러는 현재 로직에서 처리함
    if (window.confirm(ReportPageConstants.SUBMIT_CONFIRM_MESSAGE)) {
      console.log(createReport);
    } else {
      return;
    }

    // 성공시
    notify({
      type: 'default',
      text: ReportPageConstants.NOTIFY_REPORT_SUCCESS_MESSAGE,
    });

    // 홈으로

    // 실패해도...집으로 가야하지 않을까..?
  };

  const onInValid: SubmitErrorHandler<{ createReport: string }> = () => {
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

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          margin: '0 auto',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h2 style={{ fontSize: '3rem' }}>
            {ReportPageConstants.REPORT_TITLE}
          </h2>
          <span style={{ fontSize: '2rem', fontWeight: '700' }}>
            {ReportPageConstants.REPORT_GUIDE_ERROR_TITLE}
          </span>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            {ReportPageConstants.REPORT_GUIDE_ERROR_TEXT}
          </p>
        </div>
        <div>
          <span style={{ fontSize: '2rem', fontWeight: '700' }}>
            {ReportPageConstants.REPORT_GUIDE_SUGGEST_TITLE}
          </span>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            {ReportPageConstants.REPORT_GUIDE_SUGGEST_TEXT}
          </p>
        </div>
        <div>
          <span style={{ fontSize: '2rem', fontWeight: '700' }}>
            {ReportPageConstants.REPORT_GUIDE_ASK_TITLE}
          </span>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            {ReportPageConstants.REPORT_GUIDE_ASK_TEXT}
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onValid, onInValid)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
            flexDirection: 'column',
          }}
        >
          <Textarea
            {...register('createReport', ReportContentValidation)}
            style={{ height: '30rem' }}
            width="100%"
            height="100%"
            placeholder={ReportPageConstants.TEXTAREA_PLACEHOLDER}
            errorMessage={
              errors.createReport?.message ? errors.createReport?.message : ''
            }
            onKeyDown={handleKeyPress}
          />
          <Button
            style={{ marginTop: '1rem' }}
            width="100%"
            height="4rem"
            text={ReportPageConstants.SUBMIT_BUTTON_TEXT}
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default Report;
