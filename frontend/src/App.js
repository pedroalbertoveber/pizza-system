// external modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// pages
import Home from 'pages/Home';

//components
import Header from 'components/Header';
import Banner from 'components/Banner';

function App() {
  return (
    <>
    <main>
      <Header />
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
    </>
  );
}

export default App;
