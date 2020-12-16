import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/Layout";
import { FormContext } from "../contexts/FormContext";
import { useHistory, Link } from "react-router-dom";

const RelationshipPage = () => {
  const {
    setRelationshipPage,
    interestPage,
    relationship,
    setRelationship,
  } = useContext(FormContext);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    rederectToPreviousPage();
  }, []);

  useEffect(() => {
    console.log(relationship);
  }, [relationship]);

  const history = useHistory();
  const rederectToPreviousPage = () => {
    !interestPage ? history.push("/interest-page") : setRelationshipPage(true);
  };

  return (
    <Layout>
      <h1>RelationshipPage</h1>

      <label className="container">
        Parent
        <input
          name="test"
          type="radio"
          onClick={e => {
            setRelationship(e.target.value);
            setDisabled(false);
          }}
          value={"parent"}
        />
        <span className="checkmark" />
      </label>

      <label className="container">
        Sibling
        <input
          name="test"
          type="radio"
          onClick={e => {
            setRelationship(e.target.value);
            setDisabled(false);
          }}
          value={"sibling"}
        />
        <span className="checkmark" />
      </label>

      <label className="container">
        Other
        <input
          name="test"
          type="radio"
          onClick={e => {
            setRelationship(e.target.value);
            setDisabled(false);
          }}
          value={"other"}
        />
        <span className="checkmark" />
      </label>

      <Link to={disabled ? null : "/result-page"}>Next</Link>
    </Layout>
  );
};

export default RelationshipPage;
