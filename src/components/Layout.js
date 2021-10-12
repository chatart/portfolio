import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "../styles/GlobalStyle";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
