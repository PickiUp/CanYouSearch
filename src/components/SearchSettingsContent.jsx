import React from 'react';
import { Switch, Input, message } from 'antd';
const { TextArea } = Input;
import { useState, useEffect } from 'react';
function SearchSettingsContent({ settingsConfig, setSettingConfig }) {
    const [value, setValue] = useState('');

    const onChange = (checked) => {
        settingsConfig.enableDeepSearch = checked;
        setSettingConfig(settingsConfig);
    };

    useEffect(() => {
        setValue(settingsConfig.excludeWords);
    }, []);

    const handleBlur = (e) => {
        const regex = /^([^ \|]+||([^ \|\n]+[^ \n]+ *\|)+[^\|\n]+[^ \|])$/gm;

        if (e.target.value.match(regex)) {
            message.success('成功更新排除关键字');
            setValue(e.target.value);
            settingsConfig.excludeWords = e.target.value;
            setSettingConfig(settingsConfig);
            localStorage.setItem('excludeWords', e.target.value);
        } else {
            message.error(
                '格式不正确，应该为 "foo|bar|baz", 除了内容中间有空格外，其地方没有空格 ',
                6,
            );
        }
    };
    function handleTextAreaChange(e) {
        setValue(e.target.value);
    }
    return (
        <div>
            <span>深搜索：用引号 ""（英文） 包裹搜索内容</span>
            <br />
            <Switch
                defaultChecked
                onChange={onChange}
                size="small"
            />
            <br />
            <span>排除关键字 </span>
            <TextArea
                value={value}
                onChange={handleTextAreaChange}
                placeholder="排除关键字：csdn|foo|bar"
                onBlur={handleBlur}
                autoSize
            />
        </div>
    );
}

export default SearchSettingsContent;
