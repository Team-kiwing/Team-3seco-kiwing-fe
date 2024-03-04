import { useState } from 'react';

import BorderBox from '@/components/common/BorderBox';
import Button from '@/components/common/Button';
import Selector from '@/components/common/Selector';
import { Question } from '@/types';

import MyQuestionBox from '../MyQuestionBox';
import {
  Body,
  Container,
  CountText,
  Footer,
  Header,
} from './MyBundleDetail.style';

const MyBundleDetail = ({ questions }: { questions: Question[] }) => {
  const [isAll, setIsAll] = useState(true);

  return (
    <BorderBox
      width="100%"
      height="100%"
    >
      <Container>
        <Header>
          <Selector
            content={['전체', '내가 작성한 질문']}
            isState={isAll}
            setIsState={setIsAll}
          />
        </Header>
        <Body>
          {questions.map((question) => (
            <MyQuestionBox
              key={question.id}
              question={question.content}
              answer={question.answer}
            />
          ))}
        </Body>
        <Footer>
          <Button
            width="100%"
            text="+ 새 질문 추가하기"
          />
          <CountText>{questions.length}/100</CountText>
        </Footer>
      </Container>
    </BorderBox>
  );
};

export default MyBundleDetail;
