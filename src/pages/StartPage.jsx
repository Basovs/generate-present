import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout";
import { FormContext } from "../contexts/FormContext";
import { Link } from "react-router-dom";

const StartPage = () => {
  const {
    setStartPage,
    setAgePage,
    setInterestPage,
    setRelationshipPage,
  } = useContext(FormContext);

  useEffect(() => {
    setStartPage(true);

    setAgePage(false);
    setInterestPage(false);
    setRelationshipPage(false);
  }, []);

  return (
    <Layout>
      <h1>Wellcome to the holiday present generator!</h1>

      <Link to="/age-page">Begin</Link>
    </Layout>
  );
};

export default StartPage;
