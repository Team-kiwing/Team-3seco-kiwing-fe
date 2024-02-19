import { Route, Routes } from 'react-router-dom';

import Modal from '@/components/common/Modal';
import {
  AuthPage,
  HubPage,
  MainPage,
  MyListPage,
  NotFoundPage,
  RegisterPage,
  ReportPage,
  SharedItemPage,
  SharedPage,
  TestPage,
} from '@/pages';

const Router = () => {
  return (
    <>
      <Routes>
        {/* 프레이머 모션 용 */}
        <Route>
          <Route
            path="/" // 메인페이지
            element={<MainPage />}
          />
          <Route
            path="/auth" // 로그인, 회원가입 페이지
            element={<AuthPage />}
          />
          <Route
            path="/register" // 회원가입 후 등록 페이지
            element={<RegisterPage />}
          />
          <Route
            path="/hub" // 질문 허브 페이지(검색)
            element={<HubPage />}
          />
          <Route
            path="/shared" // 공유된 질문 페이지(검색)
            element={<SharedPage />}
          />
          <Route
            path="/shared/:id" // 공유된 질문 페이지(별개의 페이지)
            element={<SharedItemPage />}
          />
          <Route
            path="/@:id" // 내 질문 리스트, 이메일 주소로 개인 페이지
            element={<MyListPage />}
          />
          <Route
            path="/report" // 신고, 건의 페이지
            element={<ReportPage />}
          />
          <Route
            path="/test" // test 페이지
            element={<TestPage />}
          />
          <Route
            path="*" // 404 페이지
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
      <Modal />
    </>
  );
};

export default Router;
