import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#ab1929",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./kwy.png",
  fullDecal: "./pattern.png",
});
export default state;
