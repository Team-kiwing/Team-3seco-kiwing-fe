import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import Button from '@/components/common/Button';
import useResize from '@/hooks/useResize';
import { BundlesBasic } from '@/types';

import MyBundleItem from '../MyBundleItem';
import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import { useReorderBundle } from './MyBundleList.hook';
import {
  BundleInnerWrapper,
  BundleItemWrapper,
  BundleWrapper,
  ButtonWrapper,
  Container,
} from './MyBundleList.style';
import { MyBundleListProps } from './MyBundleList.type';

const MyBundleList = ({
  bundles,
  selectedBundleId,
  setSelectedBundleId,
}: MyBundleListProps) => {
  const { handleAddBundleClick } = useMyBundleModal();
  const { mutate: reorder } = useReorderBundle();
  const [orderedBundles, setOrderedBundles] = useState<BundlesBasic[]>(bundles);

  const { isMobileSize } = useResize();
  useEffect(() => {
    setOrderedBundles(bundles);
  }, [bundles]);

  // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    // 깊은 복사
    const _items = JSON.parse(
      JSON.stringify(orderedBundles)
    ) as typeof orderedBundles;
    // 기존 아이템 뽑아내기
    const [targetItem] = _items.splice(source.index, 1);
    // 기존 아이템을 새로운 위치에 삽입하기
    _items.splice(destination.index, 0, targetItem);
    // 상태 변경
    setOrderedBundles(_items);

    reorder({
      bundleIds: _items.map((bundle) => bundle.id),
    });
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
    <Container>
      <BundleWrapper>
        {isMobileSize ? (
          orderedBundles.map((bundle) => (
            <BundleItemWrapper
              key={bundle.id}
              id={String(bundle.id)}
            >
              <MyBundleItem
                key={bundle.id}
                bundle={bundle}
                selectedBundleId={selectedBundleId}
                setSelectedBundleId={setSelectedBundleId}
              />
            </BundleItemWrapper>
          ))
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <BundleInnerWrapper
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {orderedBundles.map((bundle, index) => (
                    <Draggable
                      key={String(bundle.id)}
                      draggableId={String(bundle.id)}
                      index={index}
                    >
                      {(provided) => (
                        <BundleItemWrapper
                          id={String(bundle.id)}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <MyBundleItem
                            key={bundle.id}
                            bundle={bundle}
                            selectedBundleId={selectedBundleId}
                            setSelectedBundleId={setSelectedBundleId}
                          />
                        </BundleItemWrapper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </BundleInnerWrapper>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </BundleWrapper>
      <ButtonWrapper>
        <Button
          width="100%"
          height="5rem"
          text="+ 새 질문 꾸러미 추가하기"
          onClick={handleAddBundleClick}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default MyBundleList;
