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
  MainUserInfoCardBox,
  VerticalDivider,
} from './Main.style';

const Main = () => {
  const { isMobileSize } = useResize();
  const storedRefreshToken = getItem('refresh-token', null);

  const { nickname, profileImage, memberTags, snsList, isLogin } =
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
      {storedRefreshToken && !nickname ? (
        <Spinner />
      ) : (
        <div>
          {isLogin ? (
            <MainUserInfoCardBox>
              <UserInfoCard
                userName={nickname.split('@')[1]}
                userImage={profileImage}
                tags={memberTags}
                links={snsList}
                rightButtonOn={true}
              />
            </MainUserInfoCardBox>
          ) : (
            <Banner
              onClick={() => window.open('https://kiwing.shop/', '_blank')}
            />
          )}
          <MainPageWrapper>
            <MainListWrapper>
              <MainItemWrapper>
                <MainListHeader>최근 등록된 질문</MainListHeader>
                {threeQuestions?.questionResponses?.map((question) => (
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
        </div>
      )}
    </>
  );
};

export default Main;
