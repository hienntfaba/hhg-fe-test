/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import theme from 'styles/theme';
import { CounterPage } from './pages/CounterPage';
import { EmployeePage } from './pages/EmployeePage';
import { Layout } from './components/Layout';

export function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - HHG Front End Test"
          defaultTitle="HHG Front End Test"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="HHG Front End Test" />
        </Helmet>
        <Layout>
          <Switch>
            <Redirect exact path="/" to="/counter" />
            <Route exact path="/counter" component={CounterPage} />
            <Route exact path="/employee" component={EmployeePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
