import { Route, Routes } from 'react-router-dom';

import ModalLayout from '@/components/common/ModalLayout';
import {
  MobileBottomNavBar,
  MobileTopNavBar,
  WebNavBar,
} from '@/components/common/Navigator';
import Layout from '@/components/Layout';
import MyBundleDetail from '@/components/MyBundle/MyBundleDetail';
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
  ReportPage,
  SharedItemPage,
  SharedPage,
} from '@/pages';

import AuthRoute from './AuthRoute';

const Router = () => {
  const { isMobileSize } = useResize();
  return (
    <>
      {!isMobileSize && <WebNavBar />}
      {isMobileSize && <MobileTopNavBar />}
      <Layout>
        <Routes>
          <Route
            path={PATH.MAIN} // 메인페이지
            element={<MainPage />}
          />
          <Route
            path={PATH.AUTH} // 로그인, 회원가입 페이지
            element={<AuthPage />}
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
          {isMobileSize ? (
            <Route
              path={PATH.MY_BUNDLED_DETAIL} // 내 질문 리스트, 이메일 주소로 개인 페이지
              element={<AuthRoute element={<MyBundleDetail />} />}
            />
          ) : (
            <Route
              path={PATH.MY_BUNDLED_DETAIL} // 내 질문 리스트, 이메일 주소로 개인 페이지
              element={<AuthRoute element={<MyBundlePage />} />}
            />
          )}
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
        </Routes>
      </Layout>
      {isMobileSize && <MobileBottomNavBar />}
      <ModalLayout />
      <Toast />
    </>
  );
};

export default Router;
