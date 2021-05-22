import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './components/Layout/MainLayout';
import { Movies } from './components/Modules/Movies';
import { MovieDetail } from './components/Modules/MovieDetail';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/" exact component={Movies} />
          <Route path="/detail/:imdbID" component={MovieDetail} />
        </MainLayout>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
