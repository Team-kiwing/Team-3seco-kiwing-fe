import { useState } from 'react';

import Input from '@/components/common/Input';
import TagFilter from '@/components/common/TagFilter';
import { notify } from '@/hooks/toast';
import useResize from '@/hooks/useResize';
import { Tag } from '@/types';

import {
  RegisterCheckbox,
  RegisterCheckboxWrapper,
  RegisterFormWrapper,
  RegisterHeader,
  RegisterItemWrapper,
  RegisterLabel,
  RegisterLogo,
  RegisterPageWrapper,
  RegisterSubmitButton,
} from './Register.style';

const Register = () => {
  const { isMobileSize } = useResize();

  const [isChecked, setIsChecked] = useState(false);
  const handleRegisterSubmit = () => {
    if (isChecked) {
      notify({ type: 'success', text: '가입에 성공했습니다 !' });
    } else {
      notify({
        type: 'error',
        text: '이용약관에 동의해야 서비스에 가입할 수 있습니다.',
      });
    }
  };

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const tagList: Tag[] = [
    // TODO : API 로직 추가
    { id: 1, name: '개발자' },
    { id: 2, name: '백엔드' },
    { id: 3, name: '서버' },
    { id: 4, name: '시스템' },
    { id: 5, name: '보안' },
    { id: 6, name: '프론트엔드' },
    { id: 7, name: '머신러닝' },
    { id: 8, name: 'QA' },
    { id: 9, name: '안드로이드' },
    { id: 10, name: '크로스플랫폼앱' },
    { id: 11, name: '데이터' },
    { id: 12, name: 'SW' },
    { id: 13, name: 'DevOps' },
    { id: 14, name: 'DBA' },
    { id: 15, name: '네트워크' },
    { id: 16, name: '웹퍼블리셔' },
    { id: 17, name: '임베디드' },
    { id: 18, name: 'IOS' },
    { id: 19, name: 'HW' },
  ];

  return (
    <RegisterPageWrapper>
      {!isMobileSize && (
        <RegisterLogo>
          <img
            src="./kiwing_square_white.png"
            alt="kiwing logo"
          />
        </RegisterLogo>
      )}
      <RegisterFormWrapper $isMobile={isMobileSize}>
        <RegisterHeader $isMobile={isMobileSize}>
          안녕하세요. 저희는 kiwing이에요.
        </RegisterHeader>
        <RegisterItemWrapper>
          <Input
            fontSize={1.8}
            label={'이름'}
            width="100%"
            placeholder="Input의 props로 disabled 속성을 추가한 뒤 구글 로그인 한 결과에서 이름을 넣어야함."
          />
        </RegisterItemWrapper>
        <RegisterItemWrapper>
          <Input
            fontSize={1.8}
            label={'이메일'}
            width="100%"
            placeholder="Input의 props로 disabled 속성을 추가한 뒤 구글 로그인 한 결과에서 이메일을 넣어야함."
          />
        </RegisterItemWrapper>
        <RegisterItemWrapper>
          <Input
            fontSize={1.8}
            label={'사용자 이름'}
            width="100%"
            errorMessage="영어, 숫자 이외에 문자를 넣으면 출력"
            placeholder="영어와 숫자 조합으로 적어주세요."
          />
        </RegisterItemWrapper>
        <RegisterItemWrapper>
          <RegisterLabel $isMobile={isMobileSize}>관심 분야</RegisterLabel>
          <TagFilter
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagList={tagList}
          />
        </RegisterItemWrapper>
        <RegisterItemWrapper>
          <Input
            fontSize={1.8}
            label={'링크 추가'}
            width="100%"
            placeholder="자신을 뽐낼 수 있는 링크를 추가해보세요."
          />
          <Input
            fontSize={1.8}
            width="100%"
            placeholder="자신을 뽐낼 수 있는 링크를 추가해보세요."
          />
          <Input
            fontSize={1.8}
            width="100%"
            placeholder="자신을 뽐낼 수 있는 링크를 추가해보세요."
          />
        </RegisterItemWrapper>
        <RegisterCheckboxWrapper $isMobile={isMobileSize}>
          <RegisterCheckbox
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((idx) => !idx)}
          />
          <div>
            <a href="/policy">이용약관</a>에 동의합니다.
          </div>
        </RegisterCheckboxWrapper>
        <RegisterSubmitButton
          onClick={handleRegisterSubmit}
          $isMobile={isMobileSize}
        >
          가입
        </RegisterSubmitButton>
      </RegisterFormWrapper>
    </RegisterPageWrapper>
  );
};

export default Register;
