import Header from "./components/Header.js";
import Countdown from "./components/Countdown.js";
import Welcome from "./components/Welcome.js";

import { Colors } from "./Theme/Colors";
import Greetings from "./components/Greetings.js";

export default function App() {
  return (
    <div style={styles.container}>
      <Header />
      <Welcome />
      <div style={styles.countdown}>
        <Countdown />
      </div>
      <Greetings />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.background,
    minHeight: "100vh",
  },
  countdown: {
    paddingTop: "7vh",
  },
};
