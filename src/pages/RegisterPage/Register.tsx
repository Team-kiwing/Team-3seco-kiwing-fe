import { useState } from 'react';
import { useTheme } from 'styled-components';

import Input from '@/components/common/Input';
import Skeleton from '@/components/common/Skeleton';
import TagFilter from '@/components/common/TagFilter';
import { notify } from '@/hooks/toast';
import { useFetchTags } from '@/hooks/useFetchTags';
import useResize from '@/hooks/useResize';
import { themeStore } from '@/stores';
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
  const { isDarkMode } = themeStore();
  const theme = useTheme();

  const { data: tags, isLoading } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

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

  return (
    <RegisterPageWrapper>
      {!isMobileSize && (
        <RegisterLogo>
          <img
            src="./kiwing_circle_green.png"
            alt="kiwing logo"
          />
        </RegisterLogo>
      )}
      <RegisterFormWrapper $isMobile={isMobileSize}>
        <RegisterHeader $isMobile={isMobileSize}>
          안녕하세요. 저희는{' '}
          <span
            style={{
              color: isDarkMode
                ? `${theme.symbol_secondary_color}`
                : `${theme.symbol_color}`,
            }}
          >
            kiwing
          </span>
          이에요.
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
          {isLoading ? (
            <Skeleton.Box
              $width={'100%'}
              $height={'20rem'}
            />
          ) : (
            <TagFilter
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              tagList={tags ?? []}
            />
          )}
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
