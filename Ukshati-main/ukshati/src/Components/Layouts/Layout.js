import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title = "Page Title", description = "Page description", keywords = "default, keywords", author = "Author Name" }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Navigation />

      <main style={{ minHeight: "80vh" }} className="bg-gray-100">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
