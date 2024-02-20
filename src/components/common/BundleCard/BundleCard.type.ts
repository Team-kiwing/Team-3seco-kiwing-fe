export interface tagProps {
  id: number;
  tagName: string;
}

export interface BundleProps {
  id: number;
  listName: string;
  tags: tagProps[];
  subscribedCount: number;
}
