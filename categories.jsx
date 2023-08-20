import React from "react";
import { useState } from "react";
import Desi from "./Desi";

function categories(image) {
  const items = Desi();
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>price</th>
          <th>Weight</th>
        </tr>
      </thead>
      {items.map((category, index) => (
        <tbody>
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{category.category}</td>
            <td>{category.items.join(", ")}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default categories;
