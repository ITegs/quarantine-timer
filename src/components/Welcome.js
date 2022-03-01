import React from "react";
import { Colors } from "../Theme/Colors";
import { queryReciver } from "./parameters";

export default function Welcome() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Hallo {queryReciver}!</h1>
    </div>
  );
}

const styles = {
  text: {
    color: Colors.accent1,
    fontSize: "2em",
    paddingLeft: "10vw",
    marginTop: "4vh",
  },
};
