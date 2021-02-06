import React  from 'react';
import './App.css'; 
import 'bulma/css/bulma.css'; 
import { Home } from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';

function App() {

  return (
    
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail/:movieId' component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
