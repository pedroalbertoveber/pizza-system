// external modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// pages
import Home from 'pages/Home';
import Controller from 'pages/Controller';

//components
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
  <>
    <Header />
    <ToastContainer 
      autoClose={2000}
      theme={'colored'}
    />
    <main className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adm' element={<Controller />} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
  </>
  );
}

export default App;
