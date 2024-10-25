import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import { Home, NewHome } from '@zenra/components';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route with Sidebar */}
        <Route
          path="/"
          element={
            <Layout showSidebar={true}>
              <Home />
            </Layout>
          }
        />
        {/* Route without Sidebar */}
        <Route
          path="/home" element={
            <Layout showSidebar={false}>
              <NewHome />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;