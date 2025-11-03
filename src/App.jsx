import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import Preview from './pages/Preview';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <Routes>
        {/* Home page */}
        <Route path='/' element={<Home />} />

        {/* Protected or nested layout routes */}
        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        {/* Preview page */}
        <Route path='view/:resumeId' element={<Preview />} />

        {/* Login page */}
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
