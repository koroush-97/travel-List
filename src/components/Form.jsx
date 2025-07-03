export default function Form() {
  function handleSubmit() {
    console.log("cosol");
  }

  return (
    <div className="add-form">
      <h3>Shat do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {" "}
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
