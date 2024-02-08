import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 프레이머 모션 용 */}
          <Route>
            <Route
              path="/" // 메인페이지
              // element={<App />}
            />
            <Route
              path="/auth" // 로그인, 회원가입 페이지
              // element={<App />}
            />
            <Route
              path="/register" // 회원가입 후 등록 페이지
              // element={<App />}
            />
            <Route
              path="/hub" // 질문 허브 페이지(검색)
              // element={<PageOne />}
            />
            <Route
              path="/shared" // 공유된 질문 페이지(검색)
              // element={<PageTwo />}
            />
            <Route
              path="/shared/:id" // 공유된 질문 페이지(별개의 페이지)
              // element={<PageTwo />}
            />
            <Route
              path="/@:id" // 내 질문 리스트, 이메일 주소로 개인 페이지
              // element={<PageThree />}
            />
            <Route
              path="/report" // 신고, 건의 페이지
              // element={<NotFoundPage />}
            />
            <Route
              path="*" // 404 페이지
              // element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
