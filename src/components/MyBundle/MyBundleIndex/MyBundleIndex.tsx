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
      style={{
        maxHeight: '45rem',
      }}
    >
      <Container>
        {questions.map((question, index) => (
          <Text key={question.id}>
            <a href={`#${question.id}`}>
              <span>
                Q{index + 1}
                {`. `}
                {question.content}
              </span>
            </a>
          </Text>
        ))}
      </Container>
    </BorderBox>
  );
};

export default MyBundleIndex;
