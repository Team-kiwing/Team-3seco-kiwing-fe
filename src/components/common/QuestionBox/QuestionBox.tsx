import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useUpdateQuestion } from '@/components/MyBundle/MyQuestionModal/MyQuestionModal.hook';
import useAccordion from '@/hooks/useAccordion';
import useResize from '@/hooks/useResize';

import {
  Body,
  BodyWrapper,
  Container,
  EditBody,
  Header,
  RightItem,
  TitleWrapper,
} from './QuestionBox.style';
import { QuestionBoxProps } from './QuestionBox.type';

const QuestionBox = ({
  question,
  answer = '',
  rightItem,
  isEditMode = false,
  questionObj,
  bundleId,
}: QuestionBoxProps) => {
  const { isMobileSize } = useResize();
  const { parentRef, childRef, isActive, handleClick } = useAccordion();

  const [isEditable, setIsEditable] = useState(false);
  const { mutate: updateQuestion } = useUpdateQuestion(String(bundleId));

  const { register, getValues, handleSubmit, setValue } = useForm<{
    answerField: string;
  }>({
    mode: 'onSubmit',
    defaultValues: {
      answerField: answer ?? '',
    },
  });

  const handleAnswerSubmit = () => {
    if (questionObj) {
      updateQuestion({
        questionId: questionObj.id,
        content: questionObj.content,
        answer: getValues('answerField'),
        answerShareType: questionObj.answerShareType,
        tagIds: questionObj.tags.map((tag) => tag.id),
      });
    }
    setIsEditable(false);
  };

  const handleInput = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.height = 'auto';
    if (parentRef && parentRef.current) {
      parentRef.current.style.height = `${target.scrollHeight + (isMobileSize ? 23 : 43)}px`;
    }

    const { innerText } = e.currentTarget;
    if (innerText !== null) {
      setValue('answerField', `${innerText}`);
    }
  };

  return (
    <>
      <Container>
        <TitleWrapper $isActive={isActive}>
          <Header onClick={(e) => handleClick(e)}>{question}</Header>
          <RightItem>{rightItem}</RightItem>
        </TitleWrapper>

        <BodyWrapper ref={parentRef}>
          <Body
            $isEmpty={answer === null || answer.length === 0}
            ref={childRef}
            onDoubleClick={() => {
              isEditMode && setIsEditable(true);
            }}
            onBlur={() => {
              handleAnswerSubmit();
            }}
          >
            {isEditable && (
              <form onSubmit={handleSubmit(handleAnswerSubmit)}>
                <EditBody
                  contentEditable
                  suppressContentEditableWarning
                  onInput={handleInput}
                  {...register('answerField', {
                    required: true,
                  })}
                >
                  {answer === null || answer.length === 0 ? '' : answer}
                </EditBody>
              </form>
            )}
            {!isEditable && answer === null && '비공개 된 답변입니다.'}
            {!isEditable &&
              (answer !== null && answer.length === 0
                ? '작성된 답변이 없습니다.'
                : getValues('answerField'))}
          </Body>
        </BodyWrapper>
      </Container>
    </>
  );
};

export default QuestionBox;
