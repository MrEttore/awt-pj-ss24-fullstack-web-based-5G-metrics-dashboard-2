import './FormControlButtons.css';

export default function FormControlButtons({
  isLiveDataOn,
  onDataReset,
  onResetForm,
}) {
  return (
    <div className="btnContainer">
      <button className="btnSubmit" type="submit" disabled={isLiveDataOn}>
        Submit
      </button>
      <button
        className="btnReset"
        type="button"
        onClick={() => {
          onDataReset();
          onResetForm();
        }}
        disabled={isLiveDataOn}
      >
        Reset
      </button>
    </div>
  );
}
