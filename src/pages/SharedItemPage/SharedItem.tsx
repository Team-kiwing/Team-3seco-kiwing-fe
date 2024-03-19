import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '@/components/common/Spinner';
import UserInfoCard from '@/components/common/UserInfoCard';
import SharedBundleBox from '@/components/SharedBundle/SharedBundleBox';
import SharedBundleCard from '@/components/SharedBundle/SharedBundleCard';
import { getUserInfo } from '@/services/members';
import { UserInfoResponse } from '@/types';

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
  const [user, setUser] = useState<UserInfoResponse | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (detail && detail.writerId) {
        const userData: UserInfoResponse | null = await getUserInfo(
          detail.writerId
        );
        setUser(userData);
      }
    };
    fetchUser();
  }, [detail]);

  const questions = detail?.questions;

  const latestQuestions = questions?.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  if (!questions || !user || !latestQuestions) {
    return <Spinner />;
  }

  return (
    <>
      <SharedItemWrapper>
        <UserInfoWrapper>
          <UserInfoCard
            userImage={user.profileImage}
            userName={user.nickname}
            tags={user.memberTags}
            links={user.snsList}
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
