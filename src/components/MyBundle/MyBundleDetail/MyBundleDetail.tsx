import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import BorderBox from '@/components/common/BorderBox';
import Button from '@/components/common/Button';
import Selector from '@/components/common/Selector';

import MyQuestionBox from '../MyQuestionBox';
import {
  Body,
  BodyInnerWrapper,
  Container,
  CountText,
  Footer,
  Header,
} from './MyBundleDetail.style';
import { MyBundleDetailProps } from './MyBundleDetail.type';

const MyBundleDetail = ({ questions }: MyBundleDetailProps) => {
  const [isAll, setIsAll] = useState(true);

  const filteredQuestions = isAll
    ? questions
    : questions.filter((question) => question.id === question.originId);

  // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = ({ source, destination }: DropResult) => {
    console.log('>>> source', source);
    console.log('>>> destination', destination);
  };

  // --- requestAnimationFrame 초기화
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  // --- requestAnimationFrame 초기화 END

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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <BodyInnerWrapper
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {filteredQuestions.map((question, index) => (
                    <Draggable
                      key={String(question.id)}
                      draggableId={String(question.id)}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <MyQuestionBox
                            key={question.id}
                            question={question.content}
                            answer={question.answer}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </BodyInnerWrapper>
              )}
            </Droppable>
          </DragDropContext>
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
