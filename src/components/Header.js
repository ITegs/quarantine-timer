import React from "react";
import { Colors } from "../Theme/Colors";

export default function Header() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quarantäne Timer</h1>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.dark,
  },
  title: {
    color: Colors.text,
    fontSize: "1.8em",
    fontWeight: "bold",

    padding: "0.4em",
  },
};
