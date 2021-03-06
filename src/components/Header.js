import React from "react";
import { Colors } from "../Theme/Colors";
import { queryReciver } from "./parameters";

export default function Header() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        {queryReciver != null ? queryReciver + "s" : null} Quarantäne Timer
      </h1>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.accent2,
  },
  title: {
    color: Colors.background,
    fontSize: "1.6em",
    fontWeight: "bold",

    padding: "0.4em",
  },
};
