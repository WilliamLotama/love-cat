import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Testing = () => {
  const [dataKucing, setDataKucing] = useState([""]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <h1>Hello</h1>;
};

export default Testing;
