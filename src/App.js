import "./App.css";
import Snowfall from "react-snowfall";
import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import StartPage from "./pages/StartPage";
import ResultPage from "./pages/ResultPage";
import RelationshipPage from "./pages/RelationshipPage";
import InterestPage from "./pages/InterestPage";
import AgePage from "./pages/AgePage";

import { FormContext } from "./contexts/FormContext";

function App() {
  const [startPage, setStartPage] = useState(false);
  const [agePage, setAgePage] = useState(false);
  const [interestPage, setInterestPage] = useState(false);
  const [relationshipPage, setRelationshipPage] = useState(false);

  const [age, setAge] = useState("");
  const [interest, setInterest] = useState("");
  const [relationship, setRelationship] = useState("");

  return (
    <>
      {/* {console.log(startPage, agePage, interestPage, relationshipPage)} */}
      <Snowfall snowflakeCount={40} />

      <FormContext.Provider
        value={{
          startPage,
          setStartPage,
          agePage,
          setAgePage,
          interestPage,
          setInterestPage,
          relationshipPage,
          setRelationshipPage,
          age,
          setAge,
          interest,
          setInterest,
          relationship,
          setRelationship,
        }}
      >
        <Switch>
          <Route path="/result-page">
            <ResultPage />
          </Route>
          <Route path="/relationship-page">
            <RelationshipPage />
          </Route>
          <Route path="/interest-page">
            <InterestPage />
          </Route>
          <Route path="/age-page">
            <AgePage />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </FormContext.Provider>
    </>
  );
}

export default App;
