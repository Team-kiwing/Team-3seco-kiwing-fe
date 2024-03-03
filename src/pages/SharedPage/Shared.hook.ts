import { useEffect, useState } from 'react';

import { BundlesBasic } from '@/types';

import { BundleProps, TagProps } from './Shared.type';

interface BundleFilterProps {
  selectedTags: TagProps[];
  bundles: BundleProps[];
}

interface BundleDisplayProps {
  bundles: BundlesBasic[];
  filteredBundles: BundlesBasic[];
}

interface BundleFilterResult {
  filteredBundles: BundleProps[];
}

export const useBundleFilter = ({
  selectedTags,
  bundles,
}: BundleFilterProps): BundleFilterResult => {
  const [filteredBundles, setFilteredBundles] = useState<BundleProps[]>([]);

  useEffect(() => {
    if (selectedTags.length !== 0) {
      const selectedTagsName = selectedTags.map((tag) => tag.name); // 선택된 태그들의 이름 배열
      const bundlesTagsName = bundles.map((item) =>
        item.tags.map((tag) => tag.name)
      ); // 모든 꾸러미의 태그들의 이름 배열

      const filteredBundlesTag = bundlesTagsName.filter((tagArr) =>
        selectedTagsName.every((tag) => tagArr.includes(tag))
      ); // 필터된 꾸러미의 태그들

      const filteredBundles = bundles.filter((item) =>
        filteredBundlesTag.some((tagArr) =>
          tagArr.every((tag) => item.tags.some((item) => item.name === tag))
        )
      );
      setFilteredBundles(filteredBundles); //필터링된 꾸러미들이 저장됩니다
    } else {
      setFilteredBundles(bundles);
    }
  }, [selectedTags, bundles]);

  return { filteredBundles };
};

export default useBundleFilter;

export const useBundleDisplay = ({
  bundles,
  filteredBundles,
}: BundleDisplayProps) => {
  const recentBundles = [...bundles].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const popularBundles = [...bundles].sort(
    (a, b) => b.scrapeCount - a.scrapeCount
  );

  const recentFilterBundles = [...filteredBundles].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const popularFilteredBundles = [...filteredBundles].sort(
    (a, b) => b.scrapeCount - a.scrapeCount
  );

  return {
    recentBundles,
    popularBundles,
    recentFilterBundles,
    popularFilteredBundles,
  };
};
