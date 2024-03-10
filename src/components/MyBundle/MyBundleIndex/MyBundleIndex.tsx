import BorderBox from '@/components/common/BorderBox';
import { useFetchBundleDetail } from '@/hooks/api';

import { Container, Text } from './MyBundleIndex.style';
import { MyBundleIndexProps } from './MyBundleIndex.type';

const MyBundleIndex = ({ bundleId }: MyBundleIndexProps) => {
  const { data: bundle } = useFetchBundleDetail(bundleId);
  console.log(bundle);
  if (!bundle?.questions) {
    return;
  }

  return (
    <BorderBox
      width="100%"
      height="100%"
      style={{
        maxHeight: '35rem',
      }}
    >
      <Container>
        {bundle.questions.map((question, index) => (
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
