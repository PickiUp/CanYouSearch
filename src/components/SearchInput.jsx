import React from 'react';
import { Input } from 'antd';
const { Search } = Input;
function SearchInput({ setSearchText }) {
    function handleOnBlur(e) {
        console.log(e.target.value);
        setSearchText(e.target.value);
    }
    return (
        <div className="searchInput">
            <Search
                placeholder="input search text"
                enterButton
                onBlur={handleOnBlur}
                allowClear
                size="middle"
            />
        </div>
    );
}

export default SearchInput;
