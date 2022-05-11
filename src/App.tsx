import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.module.scss';
import { TestComponent } from './components/testComponent';

import RequireAuth from './components/RequireAuth/RequireAuth';
import Layout from './pages/Layout/Layout';
import Authorization from './pages/PageAuthorization/Authorization';
import PageBoard from './pages/PageBoard/PageBoard';
import EditProfile from './pages/PageEditProfile/EditProfile';
import PageMain from './pages/PageMain/PageMain';
import PageRegistration from './pages/PageRegistration/PageRegistration';
import PageWelcom from './pages/PageWelcom/PageWelcom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWelcom />} />
          <Route path="authorization" element={<Authorization />} />
          <Route path="registration" element={<PageRegistration />} />
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
      </Routes>

      <div className="App">
        <TestComponent />
      </div>
    </>
  );
}

export default App;
