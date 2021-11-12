import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/novoprojeto">Novo Projeto</Link>
      </div>
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route exact path= "/sobre">
          <Sobre />
        </Route>  
        <Route exact path= "/contato">
          <Contato />
        </Route>  
        <Route exact path= "/novoprojeto">
          <NovoProjeto />
        </Route>  
      </Switch> 
      <p>Footer</p> 
      </Router>
  )
}

export default App;
