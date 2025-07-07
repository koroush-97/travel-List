import React from "react";

import Item from "./Item";

export default function PackingList({ items, onDeleteItem, oneToggleItem }) {
  return (
    <div className="list" style={{}}>
      <ul style={{ overflow: "hidden" }}>
        {items.map((item) => (
          <Item
            key={item.id}
            onDeleteItem={onDeleteItem}
            oneToggleItem={oneToggleItem}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        <select>
          <option value="input"> Sort by input order </option>
          <option value="description"> Sort by description </option>
          <option value="packed"> Sort by status </option>
        </select>
      </div>
    </div>
  );
}
