import BorderBox from '@/components/common/BorderBox';

import { Container, Text } from './MyBundleIndex.style';
import { MyBundleIndexProps } from './MyBundleIndex.type';

const MyBundleIndex = ({ questions }: MyBundleIndexProps) => {
  if (!questions) {
    return;
  }

  return (
    <BorderBox
      width="100%"
      height="100%"
      style={
        {
          //maxHeight: '45rem',
        }
      }
    >
      <Container>
        {questions.map((question, index) => (
          <Text key={question.id}>
            <a href={`#${question.id}`}>
              <span>
                <span>{`Q${index + 1}. ${question.content}`}</span>
              </span>
            </a>
          </Text>
        ))}
      </Container>
    </BorderBox>
  );
};

export default MyBundleIndex;
