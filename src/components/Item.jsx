import React from "react";

export default function Item({ item }) {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button style={{ marginBottom: "5px" }}>
        <span>❌</span>
      </button>
    </li>
  );
}
