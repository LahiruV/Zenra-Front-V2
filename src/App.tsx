import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainBaseLayout } from '@zenra/layouts';
import { Home, NewHome } from '@zenra/components';

// Initialize the query client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Route with Sidebar */}
          <Route
            path="/"
            element={
              <MainBaseLayout showSidebar={true}>
                <Home />
              </MainBaseLayout>
            }
          />
          {/* Route without Sidebar */}
          <Route
            path="/home"
            element={
              <MainBaseLayout showSidebar={false}>
                <NewHome />
              </MainBaseLayout>
            }
          />
        </Routes>
      </Router>
      {/* Optional: Add React Query DevTools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
