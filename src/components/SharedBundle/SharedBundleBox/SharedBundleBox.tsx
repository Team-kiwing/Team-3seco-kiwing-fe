import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/common/Button';
import DropDown from '@/components/common/DropDown';
import NoSearchResults from '@/components/common/NoSearchResults';
import {
  NO_SEARCH_RESULTS_ALT_IMAGE,
  NO_SEARCH_RESULTS_IMAGE,
} from '@/components/common/NoSearchResults/NoSearchResults.const';
import ShadowBox from '@/components/common/ShadowBox';
import { notify } from '@/hooks/toast';
import useDropDown from '@/hooks/useDropDown';
import useResize from '@/hooks/useResize';
import { userDataStore } from '@/stores';

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
  const { nickname } = userDataStore();
  const { isMobileSize } = useResize();
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

  const handleAddQuestion = (checkedBundleId: number[]) => {
    if (checkedBundleId) {
      if (checkedQuestionId.length == 0) {
        notify({
          type: 'warning',
          text: SHARED_BUNDLE_BOX.FAIL_QUESTION_NOTIFY,
        });
      } else {
        if (checkedBundleId.length == 0) {
          notify({
            type: 'warning',
            text: SHARED_BUNDLE_BOX.WARNING_BUNDLE_NOTIFY,
          });
        } else {
          notify({
            type: 'success',
            text: SHARED_BUNDLE_BOX.SUCCESS_QUESTION_NOTIFY,
          });
          mutate({
            bundleIds: checkedBundleId,
            questionIds: checkedQuestionId,
          });
          setCheckedQuestionId([]);
          setCheckedAllItems(false);
        }
      }
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
                width={BUNDLE_BOX_OPTIONS.length === 0 ? '25rem' : '20rem'}
                text="내 꾸러미에 가져가기"
              />
              <DropDown
                width={BUNDLE_BOX_OPTIONS.length === 0 ? 25 : 20}
                height={BUNDLE_BOX_OPTIONS.length === 0 ? 15 : 20}
                optionHeight={5}
                options={BUNDLE_BOX_OPTIONS}
                isShow={isShow}
                closeDropDown={closeDropDown}
                setIsShow={setIsShow}
                mode="checkbox"
                onAdd={handleAddQuestion}
                direction="top-right"
                emptyText={
                  <>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: isMobileSize ? '1.2rem' : '1.6rem',
                        }}
                      >
                        아직 꾸러미가 하나도 없어요😢
                      </p>
                      <Link
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                          fontSize: isMobileSize ? '1.2rem' : '1.6rem',
                        }}
                        to={`/user/${nickname}`}
                      >
                        꾸러미 만들러 가기👆
                      </Link>
                    </div>
                  </>
                }
              />
            </SharedBundleBoxFooter>
          </>
        ) : (
          <EmptyContent>
            <NoSearchResults
              text1="앗"
              text2="추가된 질문이 없습니다."
              alt={NO_SEARCH_RESULTS_ALT_IMAGE}
              src={NO_SEARCH_RESULTS_IMAGE}
            />
          </EmptyContent>
        )}
      </ShadowBox>
    </>
  );
};

export default SharedBundleBox;
