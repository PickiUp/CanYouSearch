import { useState } from 'react';
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
        </div>
    );
}

export default App;
