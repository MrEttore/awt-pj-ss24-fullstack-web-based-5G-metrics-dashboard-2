import Select from 'react-select';

import './DropDown.css';

export default function DropDown({
  name,
  label,
  options = [],
  selectedOptions,
  onSelectOption,
  isMulti,
  isLiveDataOn,
}) {
  return (
    <div className={`dropdown ${name}`}>
      <label htmlFor="select">{label}</label>
      <Select
        className="select"
        classNamePrefix="react-select"
        id="select"
        unstyled
        isMulti={isMulti}
        isSearchable
        value={selectedOptions}
        onChange={(selected) => {
          onSelectOption(selected);
        }}
        options={options}
        required
        isDisabled={isLiveDataOn}
      />
    </div>
  );
}
