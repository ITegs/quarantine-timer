const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;

let themeColors = {
  text: "#000",
  background: "#f5f5f5",
  accent1: "#4d724d",
  accent2: "#8db48e",
};
if (darkOS) {
  themeColors = {
    text: "#999",
    background: "#1c1c1e",
    accent1: "#4d724d",
    accent2: "#8db48e",
  };
}

export const Colors = themeColors;
