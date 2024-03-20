import { useParams } from 'react-router-dom';

import Spinner from '@/components/common/Spinner';
import UserInfoCard from '@/components/common/UserInfoCard';
import SharedBundleBox from '@/components/SharedBundle/SharedBundleBox';
import SharedBundleCard from '@/components/SharedBundle/SharedBundleCard';

import { useGetBundleDetail } from './SharedItem.hook';
import {
  SharedItemWrapper,
  SharedWrapper,
  UserInfoWrapper,
} from './SharedItem.style';

const SharedItem = () => {
  const params = useParams();
  const bundleId = Number(params.id);
  const { data: detail } = useGetBundleDetail({ bundleId: bundleId });
  const questions = detail?.questions;
  const latestQuestions = questions?.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  if (!questions || !latestQuestions) {
    return <Spinner />;
  }

  return (
    <>
      <SharedItemWrapper>
        <UserInfoWrapper>
          <UserInfoCard
            userImage={detail.writer.profileImage}
            userName={detail.writer.nickname}
            tags={detail.writer.memberTags}
            links={detail.writer.snsList}
          />
        </UserInfoWrapper>
        <SharedWrapper>
          <SharedBundleCard
            bundleId={bundleId}
            bundleName={detail.name}
          />
          <SharedBundleBox questions={latestQuestions} />
        </SharedWrapper>
      </SharedItemWrapper>
    </>
  );
};
export default SharedItem;
