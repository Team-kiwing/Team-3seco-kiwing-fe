export interface tagProps {
  id: number;
  tagName: string;
}

export interface BundleProps {
  id: number;
  bundleName: string;
  hashTags: tagProps[];
  subscribedCount: number;
  isHot: boolean;
  createdAt?: string;
  updatedAt?: string;
}
