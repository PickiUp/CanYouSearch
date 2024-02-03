import React from 'react';
import { Input } from 'antd';
const { Search } = Input;
function SearchInput({ setSearchText }) {
    const handleOnchange = (e) => {
        setSearchText(e.target.value);
    };
    return (
        <div className="searchInput">
            <Search
                placeholder="input search text"
                enterButton
                onChange={handleOnchange}
                allowClear
                size="middle"
            />
        </div>
    );
}

export default SearchInput;
