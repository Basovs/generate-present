import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/Layout";
import { FormContext } from "../contexts/FormContext";
import { useHistory, Link } from "react-router-dom";

const InterestPage = () => {
  const {
    setInterestPage,
    agePage,
    setRelationshipPage,
    interest,
    setInterest,
  } = useContext(FormContext);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    rederectToPreviousPage();

    setRelationshipPage(false);
  }, []);

  useEffect(() => {
    console.log(interest);
  }, [interest]);

  const history = useHistory();
  const rederectToPreviousPage = () => {
    !agePage ? history.push("/age-page") : setInterestPage(true);
  };

  return (
    <Layout>
      <h1>Interest</h1>

      <label className="container">
        Fashion
        <input
          name="test"
          type="radio"
          onClick={e => {
            setInterest(e.target.value);
            setDisabled(false);
          }}
          value={"fashion"}
        />
        <span className="checkmark" />
      </label>

      <label className="container">
        Tech
        <input
          name="test"
          type="radio"
          onClick={e => {
            setInterest(e.target.value);
            setDisabled(false);
          }}
          value={"tech"}
        />
        <span className="checkmark" />
      </label>

      <label className="container">
        Craft
        <input
          name="test"
          type="radio"
          onClick={e => {
            setInterest(e.target.value);
            setDisabled(false);
          }}
          value={"craft"}
        />
        <span className="checkmark" />
      </label>

      <Link to={disabled ? null : "/relationship-page"}>Next</Link>
    </Layout>
  );
};

export default InterestPage;
