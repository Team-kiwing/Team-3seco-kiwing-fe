import { POLICY } from '@/constants/policy';

import { ModalContainer, PolicyContent } from './PolicyModal.style';

const PolicyModal = () => {
  return (
    <ModalContainer>
      <PolicyContent>{POLICY}</PolicyContent>
    </ModalContainer>
  );
};

export default PolicyModal;
