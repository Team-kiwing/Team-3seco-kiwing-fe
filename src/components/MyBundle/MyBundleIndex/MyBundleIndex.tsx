import ShadowBox from '@/components/common/ShadowBox';
import { useFetchBundleDetail } from '@/hooks/api';

import {
  Container,
  EmptyText,
  Text,
  TextContainer,
} from './MyBundleIndex.style';
import { MyBundleIndexProps } from './MyBundleIndex.type';

const MyBundleIndex = ({ bundleId }: MyBundleIndexProps) => {
  const { data: bundle } = useFetchBundleDetail(bundleId);
  if (!bundle?.questions) {
    return;
  }

  return (
    <ShadowBox
      width="100%"
      height="100%"
      style={{
        flexGrow: '1',
        overflowY: 'scroll',
        boxSizing: 'border-box',
      }}
    >
      <Container>
        <TextContainer>
          <EmptyText>📌</EmptyText>
        </TextContainer>
        {bundle.questions.length === 0 && (
          <EmptyText>질문이 추가되면 여기에 목차가 생겨요!</EmptyText>
        )}
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
    </ShadowBox>
  );
};

export default MyBundleIndex;
