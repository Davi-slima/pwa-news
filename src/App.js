import './App.css';
import Home from './containers/Pages/Home';
import Post from './containers/Pages/Posts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <section>
        <Router>
          <div>
            <Switch>
              <Route path="/:subject/:id">
                <Post />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </section>
    </main>
  );
}

export default App;
