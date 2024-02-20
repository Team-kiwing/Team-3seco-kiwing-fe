import { MdClose } from 'react-icons/md';

import { useModal } from '@/hooks/useModal';
import useResize from '@/hooks/useResize';

import IconWrapper from '../IconWrapper';
import {
  MobileModalCloseArea,
  ModalBody,
  ModalContents,
  ModalDimmer,
  ModalTitle,
} from './ModalLayout.style';

const ModalLayout = () => {
  const { isOpen, modalState, setModalClose } = useModal();
  const { isMobileSize } = useResize();

  const onDimmerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) return;
    setModalClose();
  };

  return (
    <>
      {isOpen && (
        <ModalDimmer onClick={onDimmerClick}>
          <ModalBody>
            <ModalTitle>{modalState.title}</ModalTitle>
            <ModalContents>{modalState.content}</ModalContents>
            {isMobileSize ? (
              <MobileModalCloseArea onClick={setModalClose}>
                <span>닫기</span>
              </MobileModalCloseArea>
            ) : (
              <IconWrapper
                style={{
                  position: 'absolute',
                  right: 0,
                }}
                $isBackground
                $size={'m'}
                onClick={setModalClose}
              >
                <MdClose />
              </IconWrapper>
            )}
          </ModalBody>
        </ModalDimmer>
      )}
    </>
  );
};

export default ModalLayout;
