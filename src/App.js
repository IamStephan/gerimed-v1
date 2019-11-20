import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider as StoreProvider } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import globals from './utils/globals.scss'

import ScrollToTop from './components/scrollToTop/scrollToTop'
import Topbar from './components/topbar/topbar'
import Footer from './components/footer/footer';
import Loader from './components/pageLoader/loader'

import AppStore from './stores/appStore'

const Construction = Loadable({
  loader: () => import('./pages/construction/construction'),
  loading: Loader
})

const Services = Loadable({
  loader: () => import('./pages/services/services'),
  loading: Loader
})

const About = Loadable({
  loader: () => import('./pages/about/about'),
  loading: Loader
})

const Contact = Loadable({
  loader: () => import('./pages/contact/contact'),
  loading: Loader
})

const stores = {
  AppStore
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: globals.primary,
      contrastText: 'white',
    },
    secondary: {
      main: globals.secondary,
      contrastText: 'white',
    }
  }
})

export default class Global extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <title>Gerimed</title>
        </Helmet>

        <StoreProvider {...stores}>
          <ThemeProvider theme={theme}>
            <Router>
              <ScrollToTop />
              <Topbar />
              <Switch>
                <Route component={Services} exact path='/services' />
                <Route component={About} exact path='/about' />
                <Route component={Contact} exact path='/contact' />
                <Route component={Construction} />
              </Switch>
              <Footer />
            </Router>
          </ThemeProvider>
        </StoreProvider>
        
      </Fragment>
    );
  }
}