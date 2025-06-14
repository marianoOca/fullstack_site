import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage,  { loader as articleLoader } from './pages/ArticlePage'
import Layout from './Layout';
import NotFoundPage from './pages/notFound';
import LoginPage from './pages/LogingPage';
import CreateAccountPage from './pages/CreateAccount';

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement:<NotFoundPage />,
  children: [{
    path: '/',
    element: <HomePage />
  }, {
    path: '/about',
    element: <AboutPage />
  }, {
    path: '/articles',
    element: <ArticlesListPage />
  }, {
    path: '/articles/:name',
    element: <ArticlePage />,
    loader: articleLoader
  }, {
    path: '/login',
    element: <LoginPage />
  }, {
    path: '/create-account',
    element: <CreateAccountPage />
  }]
}]

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App