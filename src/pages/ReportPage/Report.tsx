import { debounce } from 'lodash';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Textarea from '@/components/common/Textarea';
import { notify } from '@/hooks/toast';

const Report = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ createReport: string }>({
    mode: 'onChange',
    defaultValues: { createReport: '' },
  });

  const onValid: SubmitHandler<{ createReport: string }> = ({
    createReport,
  }) => {
    // todo 문의 제출 API 연동
    // API fail 에러는 현재 로직에서 처리함
    if (window.confirm('제출하시겠습니까?')) {
      console.log(createReport);
    } else {
      return;
    }

    // 성공시
    notify({
      type: 'default',
      text: '신고를 완료하였습니다. 불편을 드려 죄송합니다.',
    });

    // 홈으로

    // 실패해도...집으로 가야하지 않을까..?
  };

  const onInValid: SubmitErrorHandler<{ createReport: string }> = () => {
    if (errors.createReport?.message) {
      notify({ type: 'error', text: errors.createReport?.message });
    }
  };

  const handleSubmitDebounce = debounce(
    () => handleSubmit(onValid, onInValid)(),
    250
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 엔터 키의 기본 동작을 막습니다.
      handleSubmitDebounce();
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          margin: '0 auto',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h2 style={{ fontSize: '3rem' }}>📄문의하기 페이지입니다.</h2>
          <span style={{ fontSize: '2rem', fontWeight: '700' }}>🚨신고</span>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            불쾌한 콘텐츠 혹은 부적절한 행동을 목격하셨나요? 저희에게 알려주시면
            최대한 신속하게 처리됩니다.
          </p>
        </div>
        <div>
          <span style={{ fontSize: '2rem', fontWeight: '700' }}>📝건의</span>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            플랫폼을 더 나은 곳으로 만들기 위해 여러분의 의견을 기다립니다. 기능
            추가, 사용성 향상, 새로운 아이디어와 같은 모든 의견을 항상
            환영합니다.
          </p>
        </div>
        <div>
          <span style={{ fontSize: '2rem', fontWeight: '700' }}>🛎️문의</span>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            추가적인 도움이 필요하거나 질문이 있으신가요? 언제든지 문의해
            주세요. 최대한 빠르게 도와드릴게요.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onValid, onInValid)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
            flexDirection: 'column',
          }}
        >
          <Textarea
            {...register('createReport', {
              required: { value: true, message: '문의 내역을 작성해주세요.' },
              minLength: {
                value: 10,
                message: '문의 내역은 10자 이상 작성해주세요.',
              },
            })}
            style={{ height: '30rem' }}
            width="100%"
            height="100%"
            placeholder="내용을 작성해주세요."
            errorMessage={
              errors.createReport?.message ? errors.createReport?.message : ''
            }
            onKeyDown={handleKeyPress}
          />
          <Button
            style={{ marginTop: '1rem' }}
            width="100%"
            height="4rem"
            text="제출하기"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default Report;
