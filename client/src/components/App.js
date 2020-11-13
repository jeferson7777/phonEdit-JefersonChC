import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Brand from '../pages/brand.js';
import Review from '../pages/review.js';
import Blog from '../pages/blog.js';
import ErrorPage from '../pages/error.js';

// UI components
import Footer from './footer.js';
import Header from '../components/header.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/brand" component={Brand} />
          <Route path="/review" component={Review} />
          <Route path="/blog" component={Blog} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
