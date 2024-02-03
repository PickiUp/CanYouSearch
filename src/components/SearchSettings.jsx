import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse } from 'antd';
import SearchSettingsContent from './SearchSettingsContent';
function SearchSettings({ settingsConfig, setSettingConfig }) {
    const genExtra = () => (
        <SettingOutlined
            onClick={(event) => {
                // If you don't want click extra trigger collapse, you can prevent this:
                // event.stopPropagation();
            }}
        />
    );
    const items = [
        {
            key: '1',
            label: '',
            children: (
                <SearchSettingsContent
                    settingsConfig={settingsConfig}
                    setSettingConfig={setSettingConfig}
                />
            ),
        },
    ];
    return (
        <div className="searchSettings">
            <Collapse
                collapsible="icon"
                items={items}
                ghost={true}
                expandIcon={() => genExtra()}
                bordered={false}
            />
        </div>
    );
}

export default SearchSettings;
