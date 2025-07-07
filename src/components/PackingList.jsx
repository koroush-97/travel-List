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
    </div>
  );
}
