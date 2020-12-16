import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/Layout";
import { FormContext } from "../contexts/FormContext";
import { useHistory, Link } from "react-router-dom";

const AgePage = () => {
  const {
    setAgePage,
    startPage,
    setInterestPage,
    setRelationshipPage,
    age,
    setAge,
  } = useContext(FormContext);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    rederectToPreviousPage();

    setInterestPage(false);
    setRelationshipPage(false);
  }, []);

  useEffect(() => {
    console.log(age);
  }, [age]);

  const history = useHistory();
  const rederectToPreviousPage = () => {
    !startPage ? history.push("/") : setAgePage(true);
  };

  return (
    <Layout>
      <h1>Choose age</h1>

      <label className="container">
        Under 25 years
        <input
          name="test"
          type="radio"
          onClick={e => {
            setAge(e.target.value);
            setDisabled(false);
          }}
          value={24}
        />
        <span className="checkmark" />
      </label>

      <label className="container">
        25 to 50 years
        <input
          name="test"
          type="radio"
          onClick={e => {
            setAge(e.target.value);
            setDisabled(false);
          }}
          value={26}
        />
        <span className="checkmark" />
      </label>

      <label className="container">
        Above 50 years
        <input
          name="test"
          type="radio"
          onClick={e => {
            setAge(e.target.value);
            setDisabled(false);
          }}
          value={51}
        />
        <span className="checkmark" />
      </label>

      <Link to={disabled ? null : "/interest-page"}>Next</Link>
    </Layout>
  );
};

export default AgePage;
