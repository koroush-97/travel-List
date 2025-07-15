import { useState } from "react";

import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  oneToggleItem,
  rest,
}) {
  const [sortBy, setStortBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list" style={{}}>
      <ul style={{ overflow: "hidden" }}>
        {sortedItem.map((item) => (
          <Item
            key={item.id}
            onDeleteItem={onDeleteItem}
            oneToggleItem={oneToggleItem}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setStortBy(e.target.value)}>
          <option value="input"> Sort by input order 📑 </option>
          <option value="description"> Sort by description </option>
          <option value="packed"> Sort by status </option>
        </select>
        <button onClick={rest}>Clear List❌ </button>
      </div>
    </div>
  );
}
