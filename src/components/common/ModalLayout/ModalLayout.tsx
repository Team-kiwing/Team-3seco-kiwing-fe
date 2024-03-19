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
  const { isOpen, modalState, setModalCompleteClose } = useModal();
  const { isMobileSize } = useResize();

  return (
    <>
      {isOpen && (
        <ModalDimmer>
          <ModalBody>
            <ModalTitle>{modalState.title}</ModalTitle>
            <ModalContents>{modalState.content}</ModalContents>
            {isMobileSize ? (
              <MobileModalCloseArea onClick={setModalCompleteClose}>
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
                onClick={setModalCompleteClose}
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
