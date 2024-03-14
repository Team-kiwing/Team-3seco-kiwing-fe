import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Avatar from '@/components/common/Avatar';
import Input from '@/components/common/Input';
import Skeleton from '@/components/common/Skeleton';
import Spinner from '@/components/common/Spinner';
import TagFilter from '@/components/common/TagFilter';
import { usePolicyModal } from '@/components/Register/PolicyModal/PolicyModal.hook';
import { PATH } from '@/constants/router';
import { notify } from '@/hooks/toast';
import { useFetchTags } from '@/hooks/useFetchTags';
import useResize from '@/hooks/useResize';
import { themeStore, userDataStore } from '@/stores';
import { Tag } from '@/types';
import { getItem, setItem } from '@/utils/localStorage';

import {
  REGISTER_LINK_VALIDATION,
  REGISTER_NICKNAME_VALIDATION,
  URL_ERROR_MESSAGE,
} from './Register.const';
import { useUpdateMyInfo } from './Register.hook';
import {
  RegisterCheckbox,
  RegisterCheckboxWrapper,
  RegisterFormWrapper,
  RegisterHeader,
  RegisterIntro,
  RegisterItemWrapper,
  RegisterLabel,
  RegisterPageWrapper,
  RegisterSubmitButton,
} from './Register.style';
import { RegisterForm } from './Register.type';

// TODO: 닉네임 중복 처리 로직 추가
const Register = () => {
  const { nickname, setAccessToken } = userDataStore();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      github: '',
      blog: '',
      etc: '',
    },
  });

  const navigate = useNavigate();
  const { isMobileSize } = useResize();
  const { isDarkMode } = themeStore();
  const theme = useTheme();
  const { mutate } = useUpdateMyInfo();
  const { handlePolicyClick } = usePolicyModal();

  const { data: tags, isLoading: tagsLoading } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const [isChecked, setIsChecked] = useState(false);
  const handleRegisterSubmit = () => {
    const snsRequests = [
      { name: 'github', url: getValues('github') },
      { name: 'blog', url: getValues('blog') },
      { name: 'etc', url: getValues('etc') },
    ];
    const tagIds = selectedTags.map((tag) => tag.id);
    if (isChecked && getValues('nickname') !== '') {
      mutate({
        nickname: `@${getValues('nickname')}`,
        snsRequests,
        tagIds,
      });
    } else if (isChecked && getValues('nickname') === '') {
      notify({
        type: 'error',
        text: '사용자 ID는 필수입니다.',
      });
    } else {
      notify({
        type: 'error',
        text: '이용약관에 동의해야 서비스에 가입할 수 있습니다.',
      });
    }
  };

  const accessToken = new URL(window.location.href).searchParams.get(
    'access-token'
  );
  const refreshToken = new URL(window.location.href).searchParams.get(
    'refresh-token'
  );

  useEffect(() => {
    if ((getItem('refresh-token', null) && nickname) || nickname !== '') {
      navigate('/');
    } else {
      if (accessToken && refreshToken) {
        setAccessToken(accessToken);
        setItem('refresh-token', refreshToken);
        navigate(PATH.REGISTER);
      }
    }
  }, [navigate, nickname, accessToken, setAccessToken, refreshToken]);

  return (
    <>
      {nickname !== '' || (getItem('refresh-token', null) && nickname) ? (
        <Spinner />
      ) : (
        <RegisterPageWrapper>
          <RegisterIntro>
            {!isMobileSize ? (
              <img
                src="/kiwing_circle_green.png"
                alt="kiwing logo"
              />
            ) : (
              <Avatar
                style={{ flexShrink: '0' }}
                $size={'mobile'}
                $src="/kiwing_circle_green.png"
              />
            )}
            <RegisterHeader>
              안녕하세요. <br /> 저희는&nbsp;
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
          </RegisterIntro>
          <RegisterFormWrapper>
            <RegisterItemWrapper>
              <RegisterLabel>관심 분야</RegisterLabel>
              {tagsLoading ? (
                <Skeleton.Box
                  $width={'100%'}
                  $height={'20rem'}
                />
              ) : (
                <TagFilter
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  tagList={tags ?? []}
                  isLimit={true}
                />
              )}
            </RegisterItemWrapper>
            <form onSubmit={handleSubmit(handleRegisterSubmit)}>
              <RegisterItemWrapper>
                <Input
                  fontSize={1.8}
                  label={'사용자 ID'}
                  width="100%"
                  errorMessage={
                    errors?.nickname?.type === 'required'
                      ? '사용자 ID를 입력해주세요.'
                      : errors?.nickname?.type === 'pattern'
                        ? '사용자 ID는 영어와 숫자 조합으로 작성해주세요.'
                        : errors?.nickname?.type === 'minLength'
                          ? '사용자 ID는 2자 이상 작성해주세요.'
                          : ''
                  }
                  placeholder="영어와 숫자 조합으로 적어주세요."
                  {...register('nickname', REGISTER_NICKNAME_VALIDATION)}
                />
              </RegisterItemWrapper>
              <RegisterItemWrapper>
                <Input
                  fontSize={1.8}
                  label={'링크'}
                  width="100%"
                  placeholder="GitHub"
                  errorMessage={
                    errors?.github?.type === 'pattern'
                      ? `${URL_ERROR_MESSAGE}`
                      : ''
                  }
                  {...register('github', REGISTER_LINK_VALIDATION)}
                />
                <Input
                  fontSize={1.8}
                  width="100%"
                  placeholder="블로그"
                  errorMessage={
                    errors?.blog?.type === 'pattern'
                      ? `${URL_ERROR_MESSAGE}`
                      : ''
                  }
                  {...register('blog', REGISTER_LINK_VALIDATION)}
                />
                <Input
                  fontSize={1.8}
                  width="100%"
                  placeholder="기타"
                  errorMessage={
                    errors?.etc?.type === 'pattern'
                      ? `${URL_ERROR_MESSAGE}`
                      : ''
                  }
                  {...register('etc', REGISTER_LINK_VALIDATION)}
                />
              </RegisterItemWrapper>
            </form>
            <RegisterCheckboxWrapper>
              <RegisterCheckbox
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((idx) => !idx)}
              />
              <div>
                <span onClick={handlePolicyClick}>이용약관</span>에 동의합니다.
              </div>
            </RegisterCheckboxWrapper>
            <RegisterSubmitButton onClick={handleRegisterSubmit}>
              가입
            </RegisterSubmitButton>
          </RegisterFormWrapper>
        </RegisterPageWrapper>
      )}
    </>
  );
};

export default Register;
