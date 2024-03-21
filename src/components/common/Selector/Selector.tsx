import {
  FirstContent,
  SecondContent,
  SelectStick,
  SelectWrapper,
} from './Selector.style';
import { SelectorProps } from './Selector.type';

/**
 * @summary 사용법  <Selector
          isState={isRecent}
          content={['최근순', '스크랩 순']}
          onSelected={(item) => setIsRecent(item)}
        />
 * @description 공통 Selector 컴포넌트
 * @param content 필수) Selector 들어갈 text를 의미합니다. string[] 형태입니다. ex) ['전체', '내가 작성한 글']
 * @param isState 필수) boolean 타입의 true, false 상태값 입니다.
 * @param setIsState 필수) 선택이 변경될 때 호출되는 콜백 함수입니다. 선택된 항목의 상태를 부모 컴포넌트에게 전달합니다.
 * @param size 선택) 글씨 크기입니다. (rem 단위이고 number타입입니다.)
 * @returns
 */

const Selector = ({
  content,
  size = 1.6,
  setIsState,
  isState,
  ...props
}: SelectorProps) => {
  const handleSelected = (item: boolean) => {
    if (item == !isState) {
      setIsState(item);
    }
  };
  return (
    <>
      <SelectWrapper {...props}>
        <FirstContent
          $size={size}
          $setIsState={isState}
          onClick={() => handleSelected(true)}
        >
          {content[0]}
        </FirstContent>
        <SelectStick $size={size} />
        <SecondContent
          $size={size}
          $setIsState={isState}
          onClick={() => handleSelected(false)}
        >
          {content[1]}
        </SecondContent>
      </SelectWrapper>
    </>
  );
};

export default Selector;
