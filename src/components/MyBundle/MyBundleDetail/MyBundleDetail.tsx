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
import { Question } from '@/types';

import MyQuestionBox from '../MyQuestionBox';
import {
  Body,
  BodyInnerWrapper,
  Container,
  CountText,
  Footer,
  Header,
  InnerContainer,
  QuestionWrapper,
} from './MyBundleDetail.style';
import { MyBundleDetailProps } from './MyBundleDetail.type';

const MyBundleDetail = ({
  isBundleSelected,
  questions,
}: MyBundleDetailProps) => {
  const [isAll, setIsAll] = useState(true);

  const [orderedQuestions, setOrderedQuestions] =
    useState<Question[]>(questions);

  const filteredQuestions = isAll
    ? orderedQuestions
    : orderedQuestions.filter((question) => question.id === question.originId);

  useEffect(() => {
    setOrderedQuestions(questions);
  }, [questions]);

  // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    // 깊은 복사
    const _items = JSON.parse(
      JSON.stringify(orderedQuestions)
    ) as typeof orderedQuestions;
    // 기존 아이템 뽑아내기
    const [targetItem] = _items.splice(source.index, 1);
    // 기존 아이템을 새로운 위치에 삽입하기
    _items.splice(destination.index, 0, targetItem);
    // 상태 변경
    setOrderedQuestions(_items);
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

  if (!isBundleSelected) {
    return (
      <Container $isBundleSelected={isBundleSelected}>
        <BorderBox
          width="100%"
          height="100%"
        >
          없음
        </BorderBox>
      </Container>
    );
  }

  return (
    <Container $isBundleSelected={isBundleSelected}>
      <BorderBox
        width="100%"
        height="100%"
      >
        <InnerContainer>
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
                          <QuestionWrapper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <MyQuestionBox
                              key={question.id}
                              question={question.content}
                              answer={question.answer}
                            />
                          </QuestionWrapper>
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
        </InnerContainer>
      </BorderBox>
    </Container>
  );
};

export default MyBundleDetail;
