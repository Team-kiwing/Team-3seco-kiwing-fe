import { useEffect } from 'react';

import BundleCard from '@/components/common/BundleCard';
import QuestionCard from '@/components/common/QuestionCard';
import Skeleton from '@/components/common/Skeleton';
import UserInfoCard from '@/components/common/UserInfoCard';
import { useInfoUpdateModal } from '@/components/common/UserInfoCard/UserInfoCard.hook';
import useResize from '@/hooks/useResize';
import { userDataStore } from '@/stores';

import { useFetchBundles, useFetchQuestions } from './Main.hook';
import {
  Banner,
  HorizontalDivider,
  MainBundlesBox,
  MainItemWrapper,
  MainListHeader,
  MainListWrapper,
  MainPageWrapper,
  MainQuestionsBox,
  MainUserInfoCardBox,
  VerticalDivider,
} from './Main.style';

const Main = () => {
  const { isMobileSize } = useResize();
  const { handleInfoUpdateModal } = useInfoUpdateModal();

  const {
    nickname,
    profileImage,
    memberTags,
    snsList,
    isLogin,
    isFirstLogin,
    setIsFirstLogin,
  } = userDataStore();

  const { data: MainQuestions } = useFetchQuestions({
    keyword: '',
    page: 1,
    size: 4,
    sortingType: 'LATEST',
    tagIds: [],
  });
  const { data: MainBundles } = useFetchBundles({
    page: 1,
    size: 3,
    sortingType: 'LATEST',
    keyword: '',
    tagIds: [],
  });

  useEffect(() => {
    if (isFirstLogin) {
      handleInfoUpdateModal();
      setIsFirstLogin(false);
    }
  }, [isFirstLogin, handleInfoUpdateModal, setIsFirstLogin]);

  return (
    <>
      {isLogin ? (
        <MainUserInfoCardBox>
          {nickname !== '' ? (
            <UserInfoCard
              userName={nickname.split('@')[1]}
              userImage={profileImage}
              tags={memberTags}
              links={snsList}
              rightButtonOn={true}
            />
          ) : (
            <Skeleton.Box
              $width="100%"
              $height="20rem"
            />
          )}
        </MainUserInfoCardBox>
      ) : (
        <Banner onClick={() => window.open('https://kiwing.shop/', '_blank')} />
      )}
      <MainPageWrapper>
        <MainListWrapper>
          <MainItemWrapper>
            <MainListHeader>최근 등록된 질문</MainListHeader>
            {MainQuestions?.questionResponses?.map((question) => (
              <MainQuestionsBox key={question.id}>
                <QuestionCard
                  tags={question.tags}
                  id={question.id}
                  content={question.content}
                  shareCount={question.shareCount}
                  isHot={question.isHot}
                  isLogin={isLogin}
                />
              </MainQuestionsBox>
            ))}
          </MainItemWrapper>
          {isMobileSize ? <HorizontalDivider /> : <VerticalDivider />}
          <MainItemWrapper>
            <MainListHeader>최근 등록된 꾸러미</MainListHeader>
            {MainBundles?.content?.map((bundle) => (
              <MainBundlesBox key={bundle.id}>
                <BundleCard
                  id={bundle.id}
                  bundleName={bundle.name}
                  hashTags={bundle.tags}
                  subscribedCount={bundle.scrapeCount}
                  isHot={bundle.isHot}
                />
              </MainBundlesBox>
            ))}
          </MainItemWrapper>
        </MainListWrapper>
      </MainPageWrapper>
    </>
  );
};

export default Main;
