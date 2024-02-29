export interface TagProps {
  id: number;
  content: string;
}

export interface BundleProps {
  id: number;
  bundleName: string;
  hashTags: TagProps[];
  subscribedCount: number;
  isHot: boolean;
  createdAt?: string;
  updatedAt?: string;
}
