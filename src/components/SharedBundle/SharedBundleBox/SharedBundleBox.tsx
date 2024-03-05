import { useState } from 'react';

import Button from '@/components/common/Button';
import DropDown from '@/components/common/DropDown';
import ShadowBox from '@/components/common/ShadowBox';
import { notify } from '@/hooks/toast';
import useDropDown from '@/hooks/useDropDown';

import SharedQuestionBox from '../SharedQuestionBox';
import { CheckBoxInput } from '../SharedQuestionBox/SharedQuestionBox.style';
import {
  AllCheckWrapper,
  CountText,
  DropDownWrapper,
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
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toastBundleSuccess = () => {
    notify({
      type: 'success',
      text: '선택하신 꾸러미에 질문이 추가되었습니다!',
    });
  };
  const toastBundleWarning = () => {
    notify({
      type: 'warning',
      text: '추가할 꾸러미를 선택해주세요!',
    });
  };
  const toastQuestionError = () => {
    notify({
      type: 'error',
      text: '추가하고 싶은 질문을 선택해주세요!',
    });
  };
  const toastBundleError = () => {
    notify({
      type: 'error',
      text: '추가할 꾸러미를 선택해주세요!',
    });
  };
  const myBundles = [
    // 추후에 API 내꾸러미 불러오기 로직으로 변경
    {
      id: 1,
      name: '데브코스 면접리스트',
      shareType: 'string',
      isHot: true,
      createdAt: '2024-02-28T00:22:09.752Z',
      updatedAt: '2024-02-28T00:22:09.752Z',
    },
    {
      id: 2,
      name: '삼성 면접리스트',
      shareType: 'string',
      isHot: true,
      createdAt: '2024-02-28T00:22:09.752Z',
      updatedAt: '2024-02-28T00:22:09.752Z',
    },
    {
      id: 4,
      name: '카카오 면접리스트',
      shareType: 'string',
      isHot: true,
      createdAt: '2024-02-28T00:22:09.752Z',
      updatedAt: '2024-02-28T00:22:09.752Z',
    },
    {
      id: 5,
      name: '네이버 면접리스트',
      shareType: 'string',
      isHot: true,
      createdAt: '2024-02-28T00:22:09.752Z',
      updatedAt: '2024-02-28T00:22:09.752Z',
    },
    {
      id: 6,
      name: '쿠팡 면접리스트',
      shareType: 'string',
      isHot: true,
      createdAt: '2024-02-28T00:22:09.752Z',
      updatedAt: '2024-02-28T00:22:09.752Z',
    },
  ];

  // function checkQuestion(questionId: number[], checkedItems: number[]) {
  //   // 추후에 중복 질문 로직 연동예정
  //   return checkedItems.some((originId) => questionId.includes(originId));
  // }

  const handleToggleCheck = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    }
  };

  const handleAllCheck = () => {
    setCheckedAllItems(!checkedAllItems);
    if (!checkedAllItems) {
      const allId = questions.map((item) => item.id);
      setCheckedItems(allId);
    } else {
      setCheckedItems([]);
    }
  };

  const handleAddQuestion = (checkedBundleId: number[]) => {
    if (checkedBundleId) {
      if (checkedItems.length == 0) {
        toastQuestionError();
      } else {
        if (checkedBundleId.length == 0) {
          toastBundleWarning();
        } else {
          toastBundleSuccess();
          console.log(
            `선택한 BundleId가 ${checkedBundleId}인 질문꾸러미에 체크 된 QuestionId ${checkedItems}를 가진 질문을 추가합니다.`
          );
          setCheckedItems([]);
          setCheckedAllItems(false);
        }
      }
    } else {
      toastBundleError();
    }
  };

  const OPTIONS = myBundles.map((item) => ({
    id: item.id,
    title: item.name,
    body: '', // 추후에 중복 질문 로직 연동예정
  }));

  return (
    <>
      <ShadowBox
        height="100%"
        isCard={true}
        width="90%"
        style={{
          maxWidth: '80rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
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
              isChecked={checkedItems.includes(item?.id)}
              onToggleCheck={handleToggleCheck}
            />
          ))}
        </SharedBundleBoxWrapper>
        <SharedBundleBoxFooter>
          <CountText>{questions.length}/100</CountText>
          <Button
            onClick={toggleDropDown}
            id={triggerId}
            width="fit-content"
            text="내 꾸러미에 가져가기"
          />
        </SharedBundleBoxFooter>
        <DropDownWrapper>
          <DropDown
            width={20}
            optionHeight={5}
            height={20}
            options={OPTIONS}
            isShow={isShow}
            closeDropDown={closeDropDown}
            setIsShow={setIsShow}
            mode="checkbox"
            onAdd={handleAddQuestion}
            direction="top"
          />
        </DropDownWrapper>
      </ShadowBox>
    </>
  );
};

export default SharedBundleBox;