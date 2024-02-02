import SearchInput from './components/SearchInput';
import SearchSettings from './components/SearchSettings';
import SearchTabs from './components/SearchTabs';

function App() {
    return (
        <div className="app">
            <header>
                <div>
                    <h1>你就不能搜索一下吗?</h1>
                </div>
                <SearchInput />
                <SearchSettings />
            </header>
            <main>
                <SearchTabs />
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
