import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './sass/index.scss';
import App from './view/App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Router basename='adventCalendar'>
      <Route index element={<App />}/>
    </Router>
  </QueryClientProvider>
</React.StrictMode>);
