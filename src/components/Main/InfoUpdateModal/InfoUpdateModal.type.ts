import { SnsList, Tag } from '@/types';

export interface InfoUpdateModalProps {
  originalNickname: string;
  selectedTags?: Tag[];
  snsLinks?: SnsList[];
}

export interface InfoUpdateForm {
  updateNickname: string;
  updateGithub: string;
  updateBlog: string;
  updateEtc: string;
}
