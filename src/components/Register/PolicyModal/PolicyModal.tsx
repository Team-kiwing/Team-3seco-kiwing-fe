import { POLICY } from '@/pages/PolicyPage/Policy.const';

import { ModalContainer, PolicyContent } from './PolicyModal.style';

const PolicyModal = () => {
  return (
    <ModalContainer>
      <PolicyContent>{POLICY}</PolicyContent>
    </ModalContainer>
  );
};

export default PolicyModal;
