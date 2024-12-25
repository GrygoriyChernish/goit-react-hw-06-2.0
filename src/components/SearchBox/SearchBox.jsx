import { useId } from 'react';
import { wrapper, input } from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  const filterId = useId();
  return (
    <div className={wrapper}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        id={filterId}
        value={value}
        onChange={e => onFilter(e.target.value.trim())}
        className={input}
      />
    </div>
  );
};

export default SearchBox;
