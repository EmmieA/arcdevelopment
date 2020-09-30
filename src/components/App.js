import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import theme from '../common/Theme';

import RouteContextProvider from '../Contexts/RouteContext';
import ViewportContextProvider from '../Contexts/ViewportContext';

import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';

import LandingPage from './LandingPage';
import Services from './Pages/Services';
import CustomSoftware from './Pages/CustomSoftware';
import MobileApps from './Pages/MobileApps';
import Websites from './Pages/Websites';
import RevolutionCssOnly from './Pages/RevolutionCssOnly';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RouteContextProvider>
          <ViewportContextProvider>
            <Header />
            <Switch>
              {/* example of how to pass in straight text */}
              {/* <Route exact path="/" component={() => <div style={{ height: '600px' }}>Home</div>} /> */}
              <Route exact path="/" component={LandingPage} />
              {/* 
              You can't use the component prop if you want to pass props along with the component
              You have to use render={(props) => <LandingPage
                                                        {...props}
                                                        handleSetNavChoice={handleSetNavChoice}
                                                        handleSetSelectedSubMenuItem={handleSetSelectedSubMenuItem}
                                                  />
                                      }
             */}
              <Route exact path="/services" component={Services} />
              <Route exact path="/customsoftware" component={CustomSoftware} />
              <Route exact path="/mobileapps" component={MobileApps} />
              <Route exact path="/websites" component={Websites} />
              <Route exact path="/revolution" component={RevolutionCssOnly} />
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/contact" component={() => <div>Contact Us</div>} />
              <Route exact path="/estimate" component={() => <div>Estimate</div>} />
            </Switch>
            <Footer />
          </ViewportContextProvider>
        </RouteContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
