import Select from 'react-select';

import './DropDown.css';

export default function DropDown({
  name,
  label,
  options = [],
  selectedOptions,
  onSelectOption,
}) {
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
        value={selectedOptions}
        onChange={(e) => {
          onSelectOption(e);
        }}
        options={options}
        required
        isDisabled={false}
      />
    </div>
  );
}
