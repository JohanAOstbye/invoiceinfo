import React from 'react';
import ReactDOM from 'react-dom';
import { OnlineTheme, ThemeProvider } from '@dotkomonline/yacl';
import Layout from './components/layout';
import InterestForm from './components/Form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={OnlineTheme} resetCSS>
      <Layout>
        <InterestForm />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
