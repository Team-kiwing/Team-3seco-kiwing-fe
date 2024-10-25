import { useEffect } from 'react';

import BundleCard from '@/components/common/BundleCard';
import QuestionCard from '@/components/common/QuestionCard';
import { useGetMyBundles } from '@/components/common/QuestionCard/QuestionCard.hook';
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

  const { data: userBundles, refetch: getMyBundlesRefetch } =
    useGetMyBundles('LATEST');

  useEffect(() => {
    if (isFirstLogin) {
      handleInfoUpdateModal();
      setIsFirstLogin(false);
    }
  }, [isFirstLogin, handleInfoUpdateModal, setIsFirstLogin]);

  useEffect(() => {
    isLogin && getMyBundlesRefetch();
  }, [getMyBundlesRefetch, isLogin]);

  return (
    <>
      {isLogin ? (
        <MainUserInfoCardBox>
          {nickname !== '' ? (
            <UserInfoCard
              userName={nickname}
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
        <Banner>
          <img
            src="/mainBanner.webp"
            alt="서비스 소개 배너"
            onClick={() => window.open('https://kiwing.shop/', '_blank')}
          />
        </Banner>
      )}
      <MainPageWrapper>
        <MainListWrapper>
          <MainItemWrapper>
            <MainListHeader>최근 등록된 질문</MainListHeader>
            {MainQuestions?.questionResponses?.map((question) => (
              <MainQuestionsBox
                key={question.id}
                $isLogin={isLogin}
              >
                <QuestionCard
                  tags={question.tags}
                  id={question.id}
                  content={question.content}
                  shareCount={question.shareCount}
                  isHot={question.isHot}
                  isLogin={isLogin}
                  Bundle={userBundles ? userBundles : []}
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
