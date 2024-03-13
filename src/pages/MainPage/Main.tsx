import BundleCard from '@/components/common/BundleCard';
import QuestionCard from '@/components/common/QuestionCard';
import Spinner from '@/components/common/Spinner';
import UserInfoCard from '@/components/common/UserInfoCard';
import useResize from '@/hooks/useResize';
import { userDataStore } from '@/stores';
import { getItem } from '@/utils/localStorage';

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
    sortingType: 'LATEST',
    tagIds: [],
  });
  const { data: threeBundles } = useFetchBundles({
    page: 1,
    size: 3,
    sortingType: 'LATEST',
    keyword: '',
    tagIds: [],
  });

  return (
    <>
      {getItem('refresh-token', null) && !nickname ? (
        <Spinner />
      ) : (
        <MainPageWrapper>
          {accessToken ? (
            <UserInfoCard
              userName={nickname.split('@')[1]}
              userImage={profileImage}
              tags={memberTags}
              links={snsList}
              rightButtonOn={true}
            />
          ) : (
            <Banner
              onClick={() => window.open('https://kiwing.shop/', '_blank')}
            />
          )}
          <MainListWrapper>
            <MainItemWrapper>
              <MainListHeader>최근 등록된 질문</MainListHeader>
              {threeQuestions?.questionResponses?.map((question) => (
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
      )}
    </>
  );
};

export default Main;
