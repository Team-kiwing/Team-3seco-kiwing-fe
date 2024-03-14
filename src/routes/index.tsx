import { Route, Routes, useLocation } from 'react-router-dom';

import ModalLayout from '@/components/common/ModalLayout';
import {
  MobileBottomNavBar,
  MobileTopNavBar,
  WebNavBar,
} from '@/components/common/Navigator';
import Layout from '@/components/Layout';
import { PATH } from '@/constants/router';
import Toast from '@/hooks/toast';
import useResize from '@/hooks/useResize';
import {
  AuthPage,
  HubPage,
  MainPage,
  MyBundlePage,
  NotFoundPage,
  PolicyPage,
  RegisterPage,
  ReportPage,
  SharedItemPage,
  SharedPage,
} from '@/pages';

import AuthRoute from './AuthRoute';

const Router = () => {
  const { isMobileSize } = useResize();
  const location = useLocation();
  const isRegisterPage = location.pathname.includes('register');
  return (
    <>
      {!isMobileSize && !isRegisterPage && <WebNavBar />}
      {isMobileSize && !isRegisterPage && <MobileTopNavBar />}
      <Layout>
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
              element={<AuthRoute element={<SharedItemPage />} />}
            />
            <Route
              path={PATH.MY} // 내 질문 리스트, 이메일 주소로 개인 페이지
              element={<AuthRoute element={<MyBundlePage />} />}
            />
            <Route
              path={PATH.REPORT} // 신고, 건의 페이지
              element={<AuthRoute element={<ReportPage />} />}
            />
            <Route
              path={PATH.POLICY} // Policy 페이지
              element={<PolicyPage />}
            />
            <Route
              path={PATH.NOTFOUND} // 404 페이지
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </Layout>
      {isMobileSize && !isRegisterPage && <MobileBottomNavBar />}
      <ModalLayout />
      <Toast />
    </>
  );
};

export default Router;
