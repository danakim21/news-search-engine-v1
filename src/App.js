import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/App.css';
import no_image from './styles/no-image.jpg';
import NewsList from './NewsList';
import Login from './Login';
import Favorite from './Favorite';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={NewsList} />
            <Route path="/login" component={Login} />
            <Route path="/favorites" component={Favorite} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
