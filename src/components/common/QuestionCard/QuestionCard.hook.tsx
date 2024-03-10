import { useMutation, useQuery } from '@tanstack/react-query';

import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { createQuestionsToBundle, getMyBundles } from '@/services/bundles';

import { QuestionCardConstants } from './QuestionCard.const';
import { QuestionCardModal } from './QuestionCard.Modal';

export const useReportModal = ({ questionId }: { questionId: number }) => {
  const { setModalOpen } = useModal();
  const handleReportClick = () => {
    setModalOpen({
      title: QuestionCardConstants.MODAL_TITLE,
      content: <QuestionCardModal questionId={questionId} />,
    });
  };

  return { handleReportClick };
};

interface BundleParsed {
  id: number;
  name: string;
}

export const useGetMyBundles = (sortingType: string) => {
  const query = useQuery<BundleParsed[] | null>({
    queryKey: ['myBundles'],
    queryFn: () => getMyBundles(sortingType),
    select: (data) => {
      return data
        ? data.map(
            (bundleList): BundleParsed => ({
              id: bundleList.id,
              name: bundleList.name,
            })
          )
        : null;
    },
    enabled: false,
  });

  return query;
};

interface Props {
  ids: number[];
  checkedBundles: number[];
}

export const useCreateQuestionsToBundle = () => {
  const mutation = useMutation({
    mutationFn: ({ ids, checkedBundles }: Props) =>
      createQuestionsToBundle({ questionIds: ids, bundleIds: checkedBundles }),
    onError: () => {
      notify({ type: 'error', text: '에러가 발생했어요.' });
    },
    onSuccess: (res) => {
      if (res) {
        notify({ type: 'success', text: '추가 완료!' });
      } else {
        notify({ type: 'error', text: '에러가 발생했어요.' });
      }
    },
  });

  return mutation;
};
