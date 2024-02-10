import React from 'react';
import { List, Tooltip, Input } from 'antd';
const { Search } = Input;

import { useState } from 'react';
import { useEffect } from 'react';
import { message } from 'antd';
function ListItem({
    result,
    randomColor,
    searchText,
    settingConfig,
    itemIndex,
    hasReload,
    setHasReload,
    results,
    tabName,
}) {
    const [value, setValue] = useState('');
    const [valueChange, setValueChange] = useState(false);

    useEffect(() => {
        setValue(searchText);
        if (searchText === '') return;
        localStorage.setItem(`listItem${itemIndex}`, searchText);
        if (itemIndex === results.length - 1) {
            message.success(`保存搜索内容至本地储存（localstorage)`);
        }
    }, [searchText]);

    useEffect(() => {
        if (localStorage.getItem(`listItem${itemIndex}`) && hasReload) {
            setValue(localStorage.getItem(`listItem${itemIndex}`));
            if (itemIndex === results.length - 1) {
                message.success(`已从本地储存加载搜索内容`);
                setHasReload(false);
            }
        }
        setValueChange(true);
    }, [value]);

    const handleBlur = (e) => {
        const text = e.target.value;
        if (text === '') return;
        if (valueChange) {
            localStorage.setItem(`listItem${itemIndex}`, text);
            message.success(`保存搜索内容 "${text}" 至本地储存（localstorage)`);
        }
        setValueChange(false);
    };

    const onSearch = () => {
        let fullURL = '';
        let searchFields = '';
        let excludeFields = '';
        const hostRegex = /https?:\/\/([\w-]+\.[\w-]{1,63}(?:\.\w*)?\/?)/;

        if (!result.keyword) {
            searchFields = '';
        } else {
            searchFields = settingConfig.enableDeepSearch
                ? `\"${value}\"`
                : `${value}`;
        }
        if (tabName === '搜索引擎') {
            if (
                settingConfig.excludeWords &&
                settingConfig.excludeWords.trim().includes('|')
            ) {
                const words = settingConfig.excludeWords?.split('|');
                const newWords = words.map((word) => '-' + word).join(' ');
                excludeFields = newWords;
            } else {
                console.log(settingConfig.excludeWords);
                excludeFields =
                    (settingConfig.excludeWords ? '-' : '') +
                    settingConfig.excludeWords;
            }
            searchFields = searchFields + ' ' + excludeFields;
        }

        fullURL = result.searchUrl + searchFields;
        console.log(fullURL);
        message.info(`即将访问: ${result.searchUrl.match(hostRegex)[0]}`);

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
                        setValue(e.target.value);
                    }}
                    value={value}
                    showCount
                    onBlur={handleBlur}
                    style={{
                        width: 304,
                    }}
                />
            </List.Item>
        </div>
    );
}

export default ListItem;
