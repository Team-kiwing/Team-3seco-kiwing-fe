import { Route, Routes } from 'react-router-dom';

import { PATH } from '@/constants/router';
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
            path={PATH.MAIN} // 메인페이지
            element={<MainPage />}
          />
          <Route
            path={PATH.AUTH} // 로그인, 회원가입 페이지
            element={<AuthPage />}
          />
          <Route
            path={PATH.REGISTER} // 회원가입 후 등록 페이지
            element={<RegisterPage />}
          />
          <Route
            path={PATH.HUB} // 질문 허브 페이지(검색)
            element={<HubPage />}
          />
          <Route
            path={PATH.SHARED} // 공유된 질문 페이지(검색)
            element={<SharedPage />}
          />
          <Route
            path={PATH.SHARED_ITEM} // 공유된 질문 페이지(별개의 페이지)
            element={<SharedItemPage />}
          />
          <Route
            path={PATH.MY} // 내 질문 리스트, 이메일 주소로 개인 페이지
            element={<MyListPage />}
          />
          <Route
            path={PATH.REPORT} // 신고, 건의 페이지
            element={<ReportPage />}
          />
          <Route
            path={PATH.TEST} // test 페이지
            element={<TestPage />}
          />
          <Route
            path={PATH.NOTFOUND} // 404 페이지
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
