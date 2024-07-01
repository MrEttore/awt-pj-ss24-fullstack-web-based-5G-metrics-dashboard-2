import Select from 'react-select';

import './DropDown.css';

export default function DropDown({ name, label, content = [] }) {
  return (
    <div className={`dropdown ${name}`}>
      <label htmlFor="select">{label}</label>
      <Select
        className="select"
        classNamePrefix="react-select"
        id="select"
        unstyled
        isMulti
        isSearchable
        // defaultValue={selectedDevice}
        // value={selectedDevice}
        onChange={(e) => {
          console.log(e);
        }}
        options={content}
        required
        isDisabled={false}
      />
    </div>
  );
}
