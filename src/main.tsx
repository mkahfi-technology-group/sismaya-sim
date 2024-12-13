import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/query-client';

import App from './app';
import { withAuth } from './sections/auth/hocs/auth';
import { AuthProvider } from './sections/auth/providers/auth';
import { ThemeProvider } from './theme/theme-provider';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const AppWithAuth = withAuth(App);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <AppWithAuth />
              </AuthProvider>
            </QueryClientProvider>
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);