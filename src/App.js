import Countdown from "./components/Countdown.js";
import Header from "./components/Header.js";
import { Colors } from "./Theme/Colors";

export default function App() {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.countdown}>
        <Countdown />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.background,
    minHeight: "100vh",
  },
  countdown: {
    paddingTop: "10vh",
  },
};
