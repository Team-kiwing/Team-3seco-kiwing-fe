import BundleCard from '@/components/common/BundleCard';
import QuestionCard from '@/components/common/QuestionCard';
import UserInfoCard from '@/components/common/UserInfoCard';
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
  VerticalDivider,
} from './Main.style';

const Main = () => {
  const { isMobileSize } = useResize();

  const { nickname, profileImage, accessToken, memberTags, snsList, isLogin } =
    userDataStore();
  const { data: threeQuestions } = useFetchQuestions({
    keyword: '',
    page: 1,
    size: 4,
  });
  const { data: threeBundles } = useFetchBundles({
    page: 1,
    size: 3,
    sortingType: 'LATEST',
  });

  return (
    <>
      <MainPageWrapper>
        {accessToken ? (
          <UserInfoCard
            userName={nickname}
            userImage={profileImage}
            tags={memberTags}
            links={snsList}
          />
        ) : (
          // TODO: 배너 꾸미기
          <Banner>배너</Banner>
        )}
        <MainListWrapper>
          <MainItemWrapper>
            <MainListHeader>최근 등록된 질문</MainListHeader>
            {threeQuestions?.questionResponses?.map((question) => (
              <MainQuestionsBox key={question.id}>
                <QuestionCard
                  tags={question.tags}
                  id={question.id}
                  question={question.content}
                  subscribedCount={question.shareCount}
                  isHot={question.isHot}
                  isLogin={isLogin}
                />
              </MainQuestionsBox>
            ))}
          </MainItemWrapper>
          {isMobileSize ? <HorizontalDivider /> : <VerticalDivider />}
          <MainItemWrapper>
            <MainListHeader>최근 등록된 꾸러미</MainListHeader>
            {threeBundles?.content?.map((bundle) => (
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
