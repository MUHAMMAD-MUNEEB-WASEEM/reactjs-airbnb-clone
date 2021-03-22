
import Header from './Header';
import './App.css';
import Home from './Home';
import Footer from './Footer';

//FOR ROUTING
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (

    //BEM
    <div className="app">
      <Router>
        {/*Footer and Header always their so thats why out of switchs*/}
        <Header/>
        
        {/*for routing, we use switch and provide different routes in it*/}
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

        {/*always place default page(home) at bottom*/}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
