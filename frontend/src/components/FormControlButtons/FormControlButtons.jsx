import './FormControlButtons.css';

export default function FormControlButtons({ isLiveDataOn, onReset }) {
  return (
    <div className="btnContainer">
      <button className="btnSubmit" type="submit" disabled={isLiveDataOn}>
        Submit
      </button>
      <button
        className="btnReset"
        type="button"
        onClick={onReset}
        disabled={isLiveDataOn}
      >
        Reset
      </button>
    </div>
  );
}
