import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsPage from './Components/NewsPage';
import Header from './Components/Header';
import Footer from './Components/Footer'


const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/news" component={NewsPage} />
        </Switch>
      </div>
      <Footer />
    </Router>

  );
};

export default App;


