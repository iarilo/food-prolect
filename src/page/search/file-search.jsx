import React, { useState } from 'react';

export const FanSearch = (props) => {
  const { setSearchParams = Function.prototype, cb = Function.prototype } =  props;
  const [searchValue, setSearchValue] = useState('');

  const enter = (ev) => {
    if (ev.key === 'Enter') {
      hendleSabmit();
    }
  };

  const hendleSabmit = () => {
    cb(searchValue);

    const objSearch = {};
    if (searchValue.length) {
      objSearch.search = searchValue;
    }

    setSearchParams(objSearch);
  };
  return (
    <div className="seaechContainer">
      <input
        id="searchId"
        type="search"
        name="searchName"
        placeholder="поиск"
        value={searchValue}
        onKeyDown={enter}
        onChange={(ev) => setSearchValue(ev.target.value)}
      />
      <button className="btn" onClick={hendleSabmit}>
        поиск
      </button>
    </div>
  );
};
