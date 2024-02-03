import React from 'react';
import { Tabs, List } from 'antd';
import { tabs } from '../data/data';
import ListItem from './ListItem';
function SearchTabs({ searchText }) {
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
                                // header={<div>Header</div>}
                                // footer={<div>Footer</div>}
                                bordered={true}
                                loadMore
                                dataSource={tab.results}
                                renderItem={(result) => (
                                    <ListItem
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
