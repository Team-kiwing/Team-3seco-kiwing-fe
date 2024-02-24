export interface tagProps {
  id: number;
  tagName: string;
}

export interface BundleProps {
  id: number;
  bundleName: string;
  tags: tagProps[];
  subscribedCount: number;
}
