import React from "react";
import { Colors } from "../Theme/Colors";
import { querySender, queryMessage } from "./parameters";

export default function Greetings() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>
        {queryMessage == "default"
          ? "Wir freuen uns dann wieder etwas mit Dir zu machen!"
          : queryMessage}
      </h1>
      {querySender != null ? (
        <h1 style={styles.greet}>Dein {querySender}.</h1>
      ) : null}
    </div>
  );
}

const styles = {
  container: {
    color: Colors.accent1,
    textAlign: "right",
    paddingLeft: "5vw",
    paddingRight: "10vw",
    marginTop: "8vh",
  },
  text: {
    fontSize: "1.5em",
  },
  greet: {
    fontSize: "2em",
  },
};
