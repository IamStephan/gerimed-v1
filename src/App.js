import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider as StoreProvider } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import globals from './utils/globals.scss'

import ScrollToTop from './components/scrollToTop/scrollToTop'
import Topbar from './components/topbar/topbar'

import AppStore from './stores/appStore'

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
                <Route />
              </Switch>
            </Router>
          </ThemeProvider>
        </StoreProvider>
        
      </Fragment>
    );
  }
}