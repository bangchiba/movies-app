import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import { Movies } from './components/Modules/Movies';
import { MovieDetail } from './components/Modules/MovieDetail';

function App() {
  return (
      <Router>
        <Switch>
        <MainLayout>
          <Route path="/" exact component={Movies} />
          <Route path="/detail/:imdbID" component={MovieDetail} />
          </MainLayout>
        </Switch>
      </Router>
  )
}

export default App;
