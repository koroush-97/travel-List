export default function Item({ item, onDeleteItem, oneToggleItem }) {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => oneToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        style={{ marginBottom: "5px" }}
      >
        <span>❌</span>
      </button>
    </li>
  );
}
