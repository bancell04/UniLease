import './searchbar.css'

export const SearchBar = () => {
    return (
        <form>
            <div className="search">
                <span class="search-icon material-symbols-outlined">search</span>
                <input className="search-input" type="search" placeholder="Search..." />
            </div>
        </form>
    );
}

export default SearchBar;