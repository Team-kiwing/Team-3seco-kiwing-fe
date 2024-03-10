import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import { POLICY } from '@/constants/policy';

import { PolicyContent, PolicyPageWrapper, PolicyTitle } from './Policy.style';

const Policy = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <PolicyPageWrapper>
      <PolicyTitle>서비스 이용 약관</PolicyTitle>
      <PolicyContent>{POLICY}</PolicyContent>
      <Button
        onClick={() => navigate(-1)}
        width={'70%'}
        backgroundColor={`${theme.symbol_color}`}
        text={'이전 페이지로 돌아가기'}
        textSize={'1.6rem'}
        style={{ margin: '0 auto', padding: '2.5rem', wordBreak: 'keep-all' }}
      />
    </PolicyPageWrapper>
  );
};

export default Policy;
