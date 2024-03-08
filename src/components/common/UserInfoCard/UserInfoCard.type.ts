import { MemberTag, SnsList } from '@/types';

export interface UserInfoCardProps {
  userImage?: string;
  userName: string;
  tags?: MemberTag[];
  links?: SnsList[];
}
