import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <MyComponent>{children}</MyComponent>;
};

export default Layout;

const MyComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: red;
  min-block-size: 100vh;

  h1 {
    color: #fff;
    font-size: 40px;
    inline-size: 100%;
    max-inline-size: 500px;
    text-align: center;
    margin: 30px 0;
  }

  h2 {
    color: #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    padding: 5px 30px 10px;
    border-radius: 3px;
    margin: 30px 0;

    background-color: green;
  }
`;
