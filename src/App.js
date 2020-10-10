import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar, Footer } from './components'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/HomePage/Home'
import Music from './pages/Music/Music'
import Film from './pages/Film/Film'
import Sport from './pages/Sport/Sport'
import Tech from './pages/Tech/Tech'
import About from './pages/About/About'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/music" exact component={Music} />
        <Route path="/film" exact component={Film} />
        <Route path="/sport" exact component={Sport} />
        <Route path="/tech" exact component={Tech} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
