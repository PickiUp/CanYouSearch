import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
function SearchInput() {
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="searchInput">
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                allowClear
                size="middle"
            />
        </div>
    );
}

export default SearchInput;
