import React from 'react';
import { List, Tooltip, Input } from 'antd';
const { Search } = Input;

import { useState } from 'react';
import { useEffect } from 'react';
function ListItem({ result, randomColor, searchText }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(searchText);
    }, [searchText]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const onSearch = () => {
        let fullURL = '';
        if (!result.keyword) {
            fullURL = result.searchUrl;
        } else {
            fullURL = result.searchUrl + value;
        }
        console.log(fullURL);
    };
    return (
        <div>
            <List.Item className="list-item">
                <Tooltip
                    title={result.name}
                    color={randomColor}>
                    <div className="pic">
                        <img
                            src={result.icon}
                            alt=""
                        />
                    </div>
                </Tooltip>
                <Search
                    placeholder="input search text"
                    // allowClear
                    onSearch={onSearch}
                    data-url={result.searchUrl}
                    data-keyword={result.keyword}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    value={value}
                    showCount
                    style={{
                        width: 304,
                    }}
                />
            </List.Item>
        </div>
    );
}

export default ListItem;
