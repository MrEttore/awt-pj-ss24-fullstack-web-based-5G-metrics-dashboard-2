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
  isActive,
}) {
  return (
    <div
      className={`dropdown ${name} ${
        !isActive || isLiveDataOn ? 'inactive' : ''
      }`}
    >
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
        required={!isActive ? false : true}
        isDisabled={isLiveDataOn}
      />
    </div>
  );
}
