import { useState } from 'react';
import SearchInput from './components/SearchInput';
import SearchSettings from './components/SearchSettings';
import SearchTabs from './components/SearchTabs';

function App() {
    const [searchText, setSearchText] = useState('');
    return (
        <div className="app">
            <header>
                <div>
                    <h1>你就不能搜索一下吗?</h1>
                </div>
                <SearchInput setSearchText={setSearchText} />
                <SearchSettings />
            </header>
            <main>
                <SearchTabs searchText={searchText} />
            </main>
            {/* <footer>footer</footer> */}
        </div>
    );
}

export default App;
