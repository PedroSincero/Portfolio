import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About,
  Contacts,
  Projects,
  Skills } from './pages';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
}, {
  path: 'projects',
  element: <Projects />,
}, {
  path: 'skills',
  element: <Skills />,
}, {
  path: 'about',
  element: <About />,
}, {
  path: 'contact',
  element: <Contacts />,
}]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
