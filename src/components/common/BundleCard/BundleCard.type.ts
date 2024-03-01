export interface TagProps {
  id: number;
  name: string;
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
