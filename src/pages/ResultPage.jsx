import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout";
import { FormContext } from "../contexts/FormContext";
import { useHistory, Link } from "react-router-dom";

const ResultPage = () => {
  const { relationshipPage, age, interest, relationship } = useContext(
    FormContext
  );

  const data = {
    parent: {
      fashion: ["Cool t-shirt", "Cool hoody", "Warm socks"],
      tech: ["Star Wars figure", "Marvel T-shirt", "Smart Home Components"],
      craft: ["Coloring Book", "Screwdriver", "Knitting Kit"],
    },
    sibling: {
      fashion: [
        "Fashionable Clothing",
        "Branded Jewellry/Accessory",
        "Nice Hat",
      ],
      tech: [
        "Something from Teknikmagasinet",
        "Something from Webhallen",
        "Something from Mediamarkt",
      ],
      craft: [
        "Something from Panduro",
        "Something from a store located in Södermalm",
        "Crafts Table",
      ],
    },
    other: {
      fashion: [
        "Something from Glitter",
        "Something from Rituals",
        "Something from Guldfynd",
      ],
      tech: ["RC Car", "Smart Home Sockets", "Wifi Lamp"],
      craft: ["Get started with Molding Kit", "Sewing Kit", "A bag of cement"],
    },
  };

  useEffect(() => {
    rederectToPreviousPage();
  }, []);

  const generatePresent = () => {
    if (age < 25) {
      if (interest === "fashion") {
        if (relationship === "parent") {
          return data.parent.fashion[0];
        } else if (relationship === "sibling") {
          return data.parent.fashion[0];
        } else if (relationship === "other") {
          return data.parent.fashion[0];
        }
      }
      if (interest === "tech") {
        if (relationship === "parent") {
          return data.parent.tech[0];
        } else if (relationship === "sibling") {
          return data.sibling.tech[0];
        } else if (relationship === "other") {
          return data.other.tech[0];
        }
      }
      if (interest === "craft") {
        if (relationship === "parent") {
          return data.parent.craft[0];
        } else if (relationship === "sibling") {
          return data.sibling.craft[0];
        } else if (relationship === "other") {
          return data.other.craft[0];
        }
      }
    }
    if (age > 25 && age < 50) {
      if (interest === "fashion") {
        if (relationship === "parent") {
          return data.parent.fashion[1];
        } else if (relationship === "sibling") {
          return data.sibling.fashion[1];
        } else if (relationship === "other") {
          return data.other.fashion[1];
        }
      }
      if (interest === "tech") {
        if (relationship === "parent") {
          return data.parent.tech[1];
        } else if (relationship === "sibling") {
          return data.sibling.tech[1];
        } else if (relationship === "other") {
          return data.other.tech[1];
        }
      }
      if (interest === "craft") {
        if (relationship === "parent") {
          return data.parent.craft[1];
        } else if (relationship === "sibling") {
          return data.sibling.craft[1];
        } else if (relationship === "other") {
          return data.other.craft[1];
        }
      }
    }
    if (age > 50) {
      if (interest === "fashion") {
        if (relationship === "parent") {
          return data.parent.fashion[2];
        } else if (relationship === "sibling") {
          return data.sibling.fashion[2];
        } else if (relationship === "other") {
          return data.other.fashion[2];
        }
      }
      if (interest === "tech") {
        if (relationship === "parent") {
          return data.parent.tech[2];
        } else if (relationship === "sibling") {
          return data.sibling.tech[2];
        } else if (relationship === "other") {
          return data.other.tech[2];
        }
      }
      if (interest === "craft") {
        if (relationship === "parent") {
          return data.parent.craft[2];
        } else if (relationship === "sibling") {
          return data.sibling.craft[2];
        } else if (relationship === "other") {
          return data.other.craft[2];
        }
      }
    }
  };

  const history = useHistory();
  const rederectToPreviousPage = () => {
    !relationshipPage && history.push("/relationship-page");
  };

  return (
    <Layout>
      <h1>ResultPage</h1>

      <h2>{generatePresent()}</h2>
    </Layout>
  );
};

export default ResultPage;
