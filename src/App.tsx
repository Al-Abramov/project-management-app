import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.module.scss';
import NotRequireAuth from './components/NotRequireAuth/NotRequireAuth';

import RequireAuth from './components/RequireAuth/RequireAuth';
import Layout from './pages/Layout/Layout';
import Authorization from './pages/PageAuthorization/Authorization';
import PageBoard from './pages/PageBoard/PageBoard';
import EditProfile from './pages/PageEditProfile/EditProfile';
import PageMain from './pages/PageMain/PageMain';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PageRegistration from './pages/PageRegistration/PageRegistration';
import PageWelcome from './pages/PageWelcome/PageWelcome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWelcome />} />
          <Route
            path="authorization"
            element={
              <NotRequireAuth>
                <Authorization />
              </NotRequireAuth>
            }
          />
          <Route
            path="registration"
            element={
              <NotRequireAuth>
                <PageRegistration />
              </NotRequireAuth>
            }
          />
          <Route
            path="edit-profile"
            element={
              <RequireAuth>
                <EditProfile />
              </RequireAuth>
            }
          />
          <Route
            path="main"
            element={
              <RequireAuth>
                <PageMain />
              </RequireAuth>
            }
          />
          <Route
            path="board"
            element={
              <RequireAuth>
                <PageBoard />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
