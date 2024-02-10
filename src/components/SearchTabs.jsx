import React from 'react';
import { Tabs, List } from 'antd';
import { tabs } from '../data/data';
import ListItem from './ListItem';
function SearchTabs({ searchText, settingConfig, hasReload, setHasReload }) {
    const colors = [
        'pink',
        'red',
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime',
    ];
    const randomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };
    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                style={{
                    height: 220,
                }}
                items={tabs.map((tab, i) => {
                    return {
                        label: `${tab.name}`,
                        key: i,
                        children: (
                            <List
                                size="large"
                                loadMore
                                dataSource={tab.results}
                                renderItem={(result, index) => (
                                    <ListItem
                                        tabName={tab.name}
                                        results={tab.results}
                                        setHasReload={setHasReload}
                                        hasReload={hasReload}
                                        itemIndex={index}
                                        settingConfig={settingConfig}
                                        result={result}
                                        randomColor={randomColor()}
                                        searchText={searchText}
                                    />
                                )}
                            />
                        ),
                    };
                })}
            />
        </div>
    );
}

export default SearchTabs;
