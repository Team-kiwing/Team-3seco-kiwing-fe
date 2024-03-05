import { debounce } from 'lodash';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Textarea from '@/components/common/Textarea';
import { notify } from '@/hooks/toast';
import useResize from '@/hooks/useResize';

import { ReportContentValidation, ReportPageConstants } from './Report.const';
import {
  ReportForm,
  ReportGuideContainer,
  ReportGuideText,
  ReportGuideTitle,
  ReportPageLayout,
  ReportPageTitle,
} from './Report.style';

const Report = () => {
  const { isMobileSize } = useResize();
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
      <ReportPageLayout>
        {/* todo 반복문 map 객체로 줄이기 */}
        <ReportGuideContainer>
          <ReportPageTitle>{ReportPageConstants.REPORT_TITLE}</ReportPageTitle>
          <ReportGuideTitle>
            {ReportPageConstants.REPORT_GUIDE_ERROR_TITLE}
          </ReportGuideTitle>
          <ReportGuideText>
            {ReportPageConstants.REPORT_GUIDE_ERROR_TEXT}
          </ReportGuideText>
        </ReportGuideContainer>
        <ReportGuideContainer>
          <ReportGuideTitle>
            {ReportPageConstants.REPORT_GUIDE_SUGGEST_TITLE}
          </ReportGuideTitle>
          <ReportGuideText>
            {ReportPageConstants.REPORT_GUIDE_SUGGEST_TEXT}
          </ReportGuideText>
        </ReportGuideContainer>
        <ReportGuideContainer>
          <ReportGuideTitle>
            {ReportPageConstants.REPORT_GUIDE_ASK_TITLE}
          </ReportGuideTitle>
          <ReportGuideText>
            {ReportPageConstants.REPORT_GUIDE_ASK_TEXT}
          </ReportGuideText>
        </ReportGuideContainer>
        <ReportForm onSubmit={handleSubmit(onValid, onInValid)}>
          <Textarea
            {...register('createReport', ReportContentValidation)}
            style={{ height: `${isMobileSize ? '15rem' : '30rem'}` }}
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
        </ReportForm>
      </ReportPageLayout>
    </>
  );
};

export default Report;
