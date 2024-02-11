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
            <footer>
                <section className="footer-container">
                    <section className="footer-columns">
                        <div className="footer-column">
                            <div className="footer-item">
                                <h2>相关资源</h2>
                            </div>
                            <div className="footer-item">
                                <a
                                    href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    《提问的智慧》
                                </a>
                            </div>
                            <div className="footer-item">
                                <a
                                    href="https://github.com/seajs/seajs/issues/545"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    《如何向开源社区提问题》
                                </a>
                            </div>
                            <div className="footer-item">
                                <a
                                    href="http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    《如何有效地报告 Bug》
                                </a>
                            </div>
                            <div className="footer-item">
                                <a
                                    href="https://zhuanlan.zhihu.com/p/25795393"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    《如何向开源项目提交无法解答的问题》
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </footer>
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
