import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

import { BundlesBasic } from '@/types';

export interface MyBundleItem {
  selectedBundleId: number | null;
  setSelectedBundleId: (state: number | null) => void;
  bundle: BundlesBasic;
  dragHandleProps?: DraggableProvidedDragHandleProps | null | undefined;
}
