import { useState } from 'react';

import Button from '@/components/common/Button';
import DropDown from '@/components/common/DropDown';
import ShadowBox from '@/components/common/ShadowBox';
import { notify } from '@/hooks/toast';
import useDropDown from '@/hooks/useDropDown';

import SharedQuestionBox from '../SharedQuestionBox';
import { CheckBoxInput } from '../SharedQuestionBox/SharedQuestionBox.style';
import { SHARED_BUNDLE_BOX } from './SharedBundleBox.const';
import {
  useCreateQuestionsToBundle,
  useGetMyBundles,
} from './SharedBundleBox.hook';
import {
  AllCheckWrapper,
  CountText,
  EmptyContent,
  SharedBundleBoxFooter,
  SharedBundleBoxWrapper,
} from './SharedBundleBox.style';
import { SharedBundleBoxProps } from './SharedBundleBox.type';

/**
 * @summary 사용법   <SharedBundleBox questions={questions} />
 * @description  SharedBundleBox 컴포넌트
 * @param questions 필수) 해당 URL에 공유된 꾸러미가 가지고 있는 질문들입니다.
 * @returns
 */

const SharedBundleBox = ({ questions }: SharedBundleBoxProps) => {
  const { triggerId, isShow, setIsShow, closeDropDown, toggleDropDown } =
    useDropDown('sharedBundle-dropdown');

  const [checkedAllItems, setCheckedAllItems] = useState(false);
  const [checkedQuestionId, setCheckedQuestionId] = useState<number[]>([]);
  const { data: getMyBundles } = useGetMyBundles('LATEST');
  const { mutate } = useCreateQuestionsToBundle();

  const handleToggleCheck = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedQuestionId([...checkedQuestionId, id]);
    } else {
      setCheckedQuestionId(checkedQuestionId.filter((item) => item !== id));
    }
  };

  const handleAllCheck = () => {
    setCheckedAllItems(!checkedAllItems);
    if (!checkedAllItems) {
      const allCheckedId = questions.map((item) => item.id);
      setCheckedQuestionId(allCheckedId);
    } else {
      setCheckedQuestionId([]);
    }
  };

  const handleAddQuestion = (checkedBundleId: number | null) => {
    if (checkedBundleId == null) {
      return;
    }
    if (checkedQuestionId.length == 0) {
      notify({
        type: 'warning',
        text: SHARED_BUNDLE_BOX.FAIL_QUESTION_NOTIFY,
      });
    } else {
      mutate({ bundleId: checkedBundleId, questionIds: checkedQuestionId });
      setCheckedQuestionId([]);
      setCheckedAllItems(false);
      notify({
        type: 'success',
        text: SHARED_BUNDLE_BOX.SUCCESS_QUESTION_NOTIFY,
      });
    }
  };

  const BUNDLE_BOX_OPTIONS =
    getMyBundles?.map((item) => ({
      id: item.id,
      title: item.name,
    })) ?? [];

  return (
    <>
      <ShadowBox
        height="100%"
        isCard={true}
        width="100%"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {questions.length > 0 ? (
          <>
            <AllCheckWrapper>
              <span>전체 선택</span>
              <CheckBoxInput
                type="checkbox"
                onChange={handleAllCheck}
                checked={checkedAllItems}
              />
            </AllCheckWrapper>
            <SharedBundleBoxWrapper>
              {questions.map((item) => (
                <SharedQuestionBox
                  key={item.id}
                  question={item?.content}
                  answer={item?.answer}
                  questionId={item?.id}
                  isChecked={checkedQuestionId.includes(item?.id)}
                  onToggleCheck={handleToggleCheck}
                />
              ))}
            </SharedBundleBoxWrapper>
            <SharedBundleBoxFooter>
              <CountText>{questions.length}/100</CountText>
              <Button
                onClick={toggleDropDown}
                id={triggerId}
                width="20rem"
                text="내 꾸러미에 가져가기"
              />
              <DropDown
                width={20}
                optionHeight={5}
                height={15}
                options={BUNDLE_BOX_OPTIONS}
                isShow={isShow}
                closeDropDown={closeDropDown}
                setIsShow={setIsShow}
                mode="checkbox"
                onAdd={handleAddQuestion}
                direction="top-right"
              />
            </SharedBundleBoxFooter>
          </>
        ) : (
          <EmptyContent>추가 된 질문이 없습니다</EmptyContent>
        )}
      </ShadowBox>
    </>
  );
};

export default SharedBundleBox;
