import "../Forms.css";

export default function LogsForm({ selectedTab }) {
  return (
    <form
      className={`${selectedTab}Form`} /*  onSubmit={handleSubmit(event)} ... */
    >
      <label htmlFor="time">Select time</label>
      <input
        type="text"
        id="time"
        placeholder="Add an unix timestamp"
        required
      ></input>
      <div className="btnContainer">
        <button className="btnSubmit" type="submit">
          Submit
        </button>
        <button className="btnReset">Reset</button>
      </div>
    </form>
  );
}
