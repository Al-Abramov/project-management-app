import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.module.scss';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { TestComponent } from './components/testComponent';
import Layout from './pages/Layout/Layout';
import Authorization from './pages/PageAuthorization/Authorization';
import PageBoard from './pages/PageBoard/PageBoard';
import EditProfile from './pages/PageEditProfile/EditProfile';
import PageMain from './pages/PageMain/PageMain';
import PageWelcom from './pages/PageWelcom/PageWelcom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <PageWelcom />
              </RequireAuth>
            }
          />
          <Route path="authorization" element={<Authorization />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="main" element={<PageMain />} />
          <Route path="board" element={<PageBoard />} />
        </Route>
      </Routes>

      <div className="App">
        <TestComponent />
      </div>
    </>
  );
}

export default App;
