// CREATE A BUTTON THAT NAVIGATES USER THROUGH ENTIRE WEBSITE (AT BOTTOM)
// Glowing button?
// GLOWING TEXT FOR H1

import { atom } from "recoil";

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
