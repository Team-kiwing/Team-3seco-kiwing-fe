export interface BundleProps {
  id: number;
  name: string;
  shareType: string;
  scrapeCount: number;
  tags: TagProps[];
  isHot: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TagProps {
  id: number;
  content: string;
}
