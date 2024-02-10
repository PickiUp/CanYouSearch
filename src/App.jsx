import { useState } from 'react';
import Joyride from 'react-joyride';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import SearchInput from './components/SearchInput';
import SearchSettings from './components/SearchSettings';
import SearchTabs from './components/SearchTabs';

function App() {
    const settingsConfig = {
        enableDeepSearch: true,
        excludeWords: localStorage.getItem('excludeWords')
            ? localStorage.getItem('excludeWords')
            : 'csdn',
    };

    const [searchText, setSearchText] = useState('');

    const [settingConfig, setSettingConfig] = useState(settingsConfig);

    const [hasReload, setHasReload] = useState(true);

    const [run, setRun] = useState(false);
    const steps = [
        {
            target: '.searchInput  .ant-input-affix-wrapper',
            content: '输入关键字',
        },
        {
            target: '.app header .searchSettings .ant-collapse .ant-collapse-expand-icon',
            content: '点击按钮打开设置',
        },
        {
            target: '.ant-tabs #rc-tabs-1-panel-0 .ant-list-items .list-item .pic',
            content: '鼠标移入查看网址项名称',
        },
        {
            target: '.ant-tabs #rc-tabs-1-panel-0 .ant-list-items .ant-input-group-addon',
            content: '点击查询按钮进行搜索',
        },
    ];

    return (
        <div className="app">
            <header>
                <div>
                    <h1>你就不能搜索一下吗?</h1>
                </div>
                <SearchInput setSearchText={setSearchText} />
                <SearchSettings
                    settingsConfig={settingsConfig}
                    setSettingConfig={setSettingConfig}
                />
            </header>
            <main>
                <SearchTabs
                    setHasReload={setHasReload}
                    hasReload={hasReload}
                    searchText={searchText}
                    settingConfig={settingConfig}
                    setSettingConfig={setSettingConfig}
                />
            </main>
            {/* <footer>footer</footer> */}
            <Joyride
                run={run}
                steps={steps}
                continuous={true}
                showProgress={true}
                showSkipButton={true}
            />
            <FloatButton
                icon={<QuestionCircleOutlined />}
                onClick={() => setRun(!run)}
                tooltip={'帮助'}
            />
            ;
        </div>
    );
}

export default App;
