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
import ReactGA from 'react-ga'

function initializeAnalytics(){
  ReactGA.initialize("UA-180299465-1")
  ReactGA.pageview('/')
  ReactGA.pageview('/music')
  ReactGA.pageview('/film')
  ReactGA.pageview('/sport')
  ReactGA.pageview('/tech')
  ReactGA.pageview('/about')
}

function App() {
  initializeAnalytics()
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
