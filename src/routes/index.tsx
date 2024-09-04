/*
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ModalLayout from '@/components/common/ModalLayout';
import {
  MobileBottomNavBar,
  MobileTopNavBar,
  WebNavBar,
} from '@/components/common/Navigator';
import Spinner from '@/components/common/Spinner';
import Layout from '@/components/Layout';
import { PATH } from '@/constants/router';
import Toast from '@/hooks/toast';
import useResize from '@/hooks/useResize';

import AuthRoute from './AuthRoute';

const Main = lazy(() => import('@pages/MainPage'));
const Hub = lazy(() => import('@pages/HubPage'));
const Auth = lazy(() => import('@pages/AuthPage'));
const Shared = lazy(() => import('@pages/SharedPage'));
const SharedItem = lazy(() => import('@pages/SharedItemPage'));
const NotFound = lazy(() => import('@pages/NotFoundPage'));
const MyBundle = lazy(() => import('@pages/MyBundlePage'));
const MyBundleDetail = lazy(
  () => import('@/components/MyBundle/MyBundleDetail')
);
const Policy = lazy(() => import('@pages/PolicyPage'));
const Report = lazy(() => import('@pages/ReportPage'));

const Router = () => {
  const { isMobileSize } = useResize();
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {!isMobileSize && <WebNavBar />}
        {isMobileSize && <MobileTopNavBar />}
        <Layout>
          <Routes>
            <Route
              path={PATH.MAIN} // 메인페이지
              element={<Main />}
            />
            <Route
              path={PATH.AUTH} // 로그인, 회원가입 페이지
              element={<Auth />}
            />
            <Route
              path={PATH.HUB} // 질문 허브 페이지(검색)
              element={<Hub />}
            />
            <Route
              path={PATH.SHARED} // 공유된 질문 페이지(검색)
              element={<Shared />}
            />
            <Route
              path={PATH.SHARED_ITEM} // 공유된 질문 페이지(별개의 페이지)
              element={<AuthRoute element={<SharedItem />} />}
            />
            <Route
              path={PATH.MY} // 내 질문 리스트, 이메일 주소로 개인 페이지
              element={<AuthRoute element={<MyBundle />} />}
            />
            {isMobileSize ? (
              <Route
                path={PATH.MY_BUNDLED_DETAIL} // 내 질문 리스트, 이메일 주소로 개인 페이지
                element={<AuthRoute element={<MyBundleDetail />} />}
              />
            ) : (
              <Route
                path={PATH.MY_BUNDLED_DETAIL} // 내 질문 리스트, 이메일 주소로 개인 페이지
                element={<AuthRoute element={<MyBundle />} />}
              />
            )}
            <Route
              path={PATH.REPORT} // 신고, 건의 페이지
              element={<AuthRoute element={<Report />} />}
            />
            <Route
              path={PATH.POLICY} // Policy 페이지
              element={<Policy />}
            />
            <Route
              path={PATH.NOTFOUND} // 404 페이지
              element={<NotFound />}
            />
          </Routes>
        </Layout>
        {isMobileSize && <MobileBottomNavBar />}
        <ModalLayout />
        <Toast />
      </Suspense>
    </>
  );
};

export default Router;
*/
import Auth from '@pages/AuthPage';
import Hub from '@pages/HubPage';
import Main from '@pages/MainPage';
import MyBundle from '@pages/MyBundlePage';
import NotFound from '@pages/NotFoundPage';
import Policy from '@pages/PolicyPage';
import Report from '@pages/ReportPage';
import SharedItem from '@pages/SharedItemPage';
import Shared from '@pages/SharedPage';
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
            path={PATH.MAIN}
            element={<Main />}
          />
          <Route
            path={PATH.AUTH}
            element={<Auth />}
          />
          <Route
            path={PATH.HUB}
            element={<Hub />}
          />
          <Route
            path={PATH.SHARED}
            element={<Shared />}
          />
          <Route
            path={PATH.SHARED_ITEM}
            element={<AuthRoute element={<SharedItem />} />}
          />
          <Route
            path={PATH.MY}
            element={<AuthRoute element={<MyBundle />} />}
          />
          {isMobileSize ? (
            <Route
              path={PATH.MY_BUNDLED_DETAIL}
              element={<AuthRoute element={<MyBundleDetail />} />}
            />
          ) : (
            <Route
              path={PATH.MY_BUNDLED_DETAIL}
              element={<AuthRoute element={<MyBundle />} />}
            />
          )}
          <Route
            path={PATH.REPORT}
            element={<AuthRoute element={<Report />} />}
          />
          <Route
            path={PATH.POLICY}
            element={<Policy />}
          />
          <Route
            path={PATH.NOTFOUND}
            element={<NotFound />}
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
