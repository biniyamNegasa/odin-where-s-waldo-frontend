import ice from "./assets/ice.jpg";
import dome from "./assets/dome.jpg";
import red_carpet from "./assets/red_carpet.jpg";
import beach from "./assets/beach.jpg";
import space from "./assets/space.jpg";
import waldo from "./assets/waldo.png";
import wenda from "./assets/wenda.png";
import wizard from "./assets/wizard.png";
import odlaw from "./assets/odlaw.png";

export const gameImages = [
  {
    id: 1,
    name: "ice",
    title: "Ice Skating Theme",
    url: ice,
  },
  {
    id: 2,
    name: "olympic",
    title: "Olympic Theme",
    url: dome,
  },
  {
    id: 3,
    name: "carpet",
    title: "Red Carpet Theme",
    url: red_carpet,
  },
  { id: 4, name: "beach", title: "Beach Theme", url: beach },
  { id: 5, name: "space", title: "Space Theme", url: space },
];

export const characterImages = [
  { id: 1, title: "Waldo", url: waldo },
  { id: 2, title: "Wenda", url: wenda },
  { id: 3, title: "Wizard", url: wizard },
  { id: 4, title: "Odlaw", url: odlaw },
];

export const BASE_URL = import.meta.env.VITE_API_URL;
