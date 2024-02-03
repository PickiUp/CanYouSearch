import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function SearchSettings() {
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
            children: <div>{text}</div>,
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
