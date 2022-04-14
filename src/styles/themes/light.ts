import { globalConfigurations } from "./globalConfiguirations";

const lightConfiguration = {
  title: "light",
  colors: {
    primary: "#062743",
    secondary: "#113A5D",
    third: "#C4FFDD",
    background: "#F9F9F9",
    text: "#000000",
  },
};
var light = Object.assign(lightConfiguration, globalConfigurations);
export default light;
