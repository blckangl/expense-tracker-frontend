import toast from 'react-hot-toast';

import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainLayout from './layouts/main-layout.tsx';
import AuthPage from './pages/AuthPage.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <>
                  <div className="text-center">Tailwind active</div>
                  <button
                    onClick={() => {
                      toast.success('toast works', {
                        duration: 4000,
                        position: 'top-center',

                        // Styling
                        style: {},
                        className: '',

                        // Custom Icon
                        icon: '👏',

                        // Change colors of success/error/loading icon
                        iconTheme: {
                          primary: '#000',
                          secondary: '#fff',
                        },

                        // Aria
                        ariaProps: {
                          role: 'status',
                          'aria-live': 'polite',
                        },
                      });
                    }}
                  >
                    Show
                  </button>
                </>
              }
            />
            <Route path="auth" element={<AuthPage />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/*  */}
    </>
  );
}

export default App;
