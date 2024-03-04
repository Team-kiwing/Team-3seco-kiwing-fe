import BorderBox from '@/components/common/BorderBox';
import { Question } from '@/types';

import { Container, Text } from './MyBundleIndex.style';

const MyBundleIndex = ({
  questions,
}: {
  questions: Question[] | undefined;
}) => {
  if (!questions) {
    return;
  }

  return (
    <BorderBox
      width="100%"
      height="100%"
    >
      <Container>
        {questions.map((question, index) => (
          <Text key={question.id}>
            Q{index + 1}
            {`. `}
            {question.content}
          </Text>
        ))}
      </Container>
    </BorderBox>
  );
};

export default MyBundleIndex;
