import React from 'react';
import { List, Tooltip, Input } from 'antd';
const { Search } = Input;

import { useState } from 'react';
import { useEffect } from 'react';
import { message } from 'antd';
function ListItem({ result, randomColor, searchText, settingConfig }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(searchText);
    }, [searchText]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const onSearch = () => {
        let fullURL = '';
        let searchFields = '';
        let excludeFields = '';
        const hostRegex = /https?:\/\/([\w-]+\.[\w-]{1,63}(?:\.\w*)?\/?)/;

        if (result.keyword) {
            if (settingConfig.excludeWords.trim().includes('|')) {
                const words = settingConfig.excludeWords?.split('|');
                const newWords = words.map((word) => '-' + word).join(' ');
                excludeFields = newWords;
            } else {
                excludeFields = '-' + settingConfig.excludeWords;
            }
            searchFields = settingConfig.enableDeepSearch
                ? `\"${value}\" ${excludeFields}`
                : `${value} ${excludeFields}`;
        }

        fullURL = result.searchUrl + searchFields;
        message.info(`即将访问--->${result.searchUrl.match(hostRegex)[0]}`);

        setTimeout(() => {
            window.open(fullURL, '_blank');
        }, 3000);
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
