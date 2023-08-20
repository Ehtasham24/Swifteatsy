import React from "react";
import { useState } from "react";

function Desi() {
  const items = [
    {
      category: "Appetizers",
      items: ["Pakora", "Salad", "Samosa"],
    },
    {
      category: "Main Course",
      items: ["Karahi", "Handi", "Daal", "MixVegis"],
    },
    {
      category: "Deserts",
      items: ["Gulab Jamun", "Kher"],
    },
    {
      category: "Addons",
      items: ["Coldrinks", "Mineral water"],
    },
  ];
  return items;
}
export default Desi;
