import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import theme from '../common/Theme';

import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';

import LandingPage from './LandingPage';

function App() {
  // Ideally I'd think all this navigation-related stuff should be in a navigation context file,
  // not here in App.js
  const [navChoice, setNavChoice] = useState(0);
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState(0);

  const handleSetNavChoice = (choice) => {
    setNavChoice(choice);
  };

  const handleSetSelectedSubMenuItem = (choice) => {
    setSelectedSubMenuItem(choice);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          navChoice={navChoice}
          handleSetNavChoice={handleSetNavChoice}
          selectedSubMenuItem={selectedSubMenuItem}
          handleSetSelectedSubMenuItem={handleSetSelectedSubMenuItem}
        />
        <Switch>
          {/* example of how to pass in straight text */}
          {/* <Route exact path="/" component={() => <div style={{ height: '600px' }}>Home</div>} /> */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          navChoice={navChoice}
          handleSetNavChoice={handleSetNavChoice}
          selectedSubMenuItem={selectedSubMenuItem}
          handleSetSelectedSubMenuItem={handleSetSelectedSubMenuItem}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
