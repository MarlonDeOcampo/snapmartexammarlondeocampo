import { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/layout';
import Products from './components/products';

const Home = lazy(() => import('./pages/home'));

const App: React.FC = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path="/snapmartexammarlondeocampo">
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
          </Route>
        </Routes>
      </Layout>
    </Suspense>

  );
};

export default App;
