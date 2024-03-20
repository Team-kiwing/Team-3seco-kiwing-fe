import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import Button from '@/components/common/Button';
import Selector from '@/components/common/Selector';
import ShadowBox from '@/components/common/ShadowBox';
import { QUERYKEY } from '@/constants/queryKeys';
import useResize from '@/hooks/useResize';
import { getBundleDetail } from '@/services/bundles';
import { Question } from '@/types';

import MyQuestionBox from '../MyQuestionBox';
import MyQuestionEmpty from '../MyQuestionEmpty';
import { useMyQuestionModal } from '../MyQuestionModal/MyQuestionModal.hook';
import { useReorderQuestion } from './MyBundleDetail.hook';
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
  bundleId,
}: MyBundleDetailProps) => {
  const questionsEndRef = useRef<HTMLDivElement | null>(null);

  const { isMobileSize } = useResize();
  const { data: bundle } = useQuery({
    queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
    queryFn: async () => {
      if (!bundleId) return null;
      const data = await getBundleDetail({
        bundleId,
      });
      return data;
    },
    enabled: !!bundleId,
  });
  const { mutate: reorder } = useReorderQuestion(bundleId);

  const [isAll, setIsAll] = useState(true);
  const [orderedQuestions, setOrderedQuestions] = useState<Question[]>([]);

  const { handleAddQuestionClick } = useMyQuestionModal();

  const filteredQuestions = isAll
    ? orderedQuestions
    : orderedQuestions.filter((question) => question.originId === null);

  useEffect(() => {
    if (bundle) {
      setOrderedQuestions(bundle.questions);
    }
  }, [bundle]);

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

    if (bundleId) {
      reorder({
        bundleId,
        questionIds: _items.map((question) => question.id),
      });
    }
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

  if (!isBundleSelected || !bundle) {
    return (
      <Container $isBundleSelected={isBundleSelected}>
        <ShadowBox
          width="100%"
          height="100%"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          <img
            src="/kiwing_circle_transparent.png"
            alt="kiwing logo"
            style={{
              width: '30%',
            }}
          />
          <span>나만의 꾸러미를 선택해보세요!</span>
        </ShadowBox>
      </Container>
    );
  }

  return (
    <Container $isBundleSelected={isBundleSelected}>
      <ShadowBox
        width={isMobileSize ? '90%' : '100%'}
        height="100%"
        style={{
          boxSizing: 'border-box',
          marginLeft: isMobileSize ? '5%' : 'inherit',
          marginRight: isMobileSize ? '5%' : 'inherit',
        }}
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
            {bundle.questions.length === 0 ? (
              <MyQuestionEmpty />
            ) : (
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
                              id={String(question.id)}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                            >
                              <MyQuestionBox
                                key={question.id}
                                question={question}
                                bundleId={bundle.id}
                                answerShareType={question.answerShareType}
                                dragHandleProps={provided.dragHandleProps}
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
            )}
            <div ref={questionsEndRef} />
          </Body>

          <Footer>
            <Button
              width="100%"
              text="+ 새 질문 추가하기"
              onClick={() =>
                handleAddQuestionClick({ bundleId: bundle.id, questionsEndRef })
              }
            />
            <CountText>{bundle.questions.length}/100</CountText>
          </Footer>
        </InnerContainer>
      </ShadowBox>
    </Container>
  );
};

export default MyBundleDetail;
