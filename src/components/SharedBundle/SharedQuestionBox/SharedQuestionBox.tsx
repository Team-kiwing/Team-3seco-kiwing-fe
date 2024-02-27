import QuestionBox from '@/components/common/QuestionBox';

import { CheckBoxInput } from './SharedQuestionBox.style';
import { SharedQuestionBoxProps } from './SharedQuestionBox.type';

/**
 * @summary 사용법    <SharedQuestionBox
            key={item.id}
            question={item?.content}
            answer={item?.answer}
            questionId={item?.id}
            isChecked={checkedItems.includes(item?.id)}
            onToggleCheck={handleToggleCheck}
          />
 * @description SharedQuestionBox 컴포넌트입니다.
 * @param question 필수) 질문 내용 string 타입
 * @param answer 선택) 답변 내용 string 타입
 * @param questionId 필수) 질문의 고유 식별자 id number타입
 * @param isChecked 필수) 체크 여부 boolean타입
 * @param onToggleCheck 필수) 체크 토글 함수입니다.
 * @returns
 */

const SharedQuestionBox = ({
  question,
  answer,
  questionId,
  isChecked,
  onToggleCheck,
}: SharedQuestionBoxProps) => {
  const handleChange = () => {
    onToggleCheck(questionId, !isChecked);
  };

  return (
    <QuestionBox
      question={question}
      answer={answer}
      rightItem={
        <CheckBoxInput
          type="checkbox"
          onChange={handleChange}
          checked={isChecked}
        />
      }
    />
  );
};

export default SharedQuestionBox;
