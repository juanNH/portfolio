import { globalConfigurations } from "./globalConfiguirations";

const darkConfiguration = {
  title: "dark",
  colors: {
    primary: "#062743",
    secondary: "#113A5D",
    third: "#C4FFDD",
    background: "#F9F9F9",
    text: "#000000",
  },
};
var dark = Object.assign(darkConfiguration, globalConfigurations);
export default dark;
