import { SnsList, Tag } from '@/types';

export interface InfoUpdateModalProps {
  originalNickname: string;
  originalTags?: Tag[];
  snsLinks?: SnsList[];
  profileImage?: string;
}

export interface InfoUpdateModalForm {
  updateNickname: string;
  updateGithub: string;
  updateBlog: string;
  updateEtc: string;
}
