import Button from '@/components/common/Button';
import Textarea from '@/components/common/Textarea';
import useResize from '@/hooks/useResize';

import {
  ReportContentValidation,
  ReportPageConstants,
  ReportPageGuide,
} from './Report.const';
import { useReportForm } from './Report.hook';
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
  const { register, handleSubmit, onValid, onInValid, handleKeyPress, errors } =
    useReportForm();

  return (
    <>
      <ReportPageLayout>
        <ReportGuideContainer>
          <ReportPageTitle>{ReportPageConstants.REPORT_TITLE}</ReportPageTitle>
        </ReportGuideContainer>
        {ReportPageGuide.map((val, index) => {
          return (
            <ReportGuideContainer key={index}>
              <ReportGuideTitle>{val.title}</ReportGuideTitle>
              <ReportGuideText>{val.text}</ReportGuideText>
            </ReportGuideContainer>
          );
        })}
        <ReportForm onSubmit={handleSubmit(onValid, onInValid)}>
          <Textarea
            {...register('createReport', ReportContentValidation)}
            style={{
              marginTop: `${isMobileSize ? '2rem' : '3rem'}`,
              height: `${isMobileSize ? '15rem' : '30rem'}`,
            }}
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
