import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NewsPage from './Components/NewsPage';
import Header from './Components/Header';
import Footer from './Components/Footer'


const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<NewsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );
};

export default App;


