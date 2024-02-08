import "./landing.css"
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ApiContext } from "../context"
import SearchBar from "../Components/SearchBar/searchbar"

export const LandingPage = () => {

    const [filters, setFilters] = useContext(ApiContext)
    const data = [
        { id: 1, name: 'Colorado School of Mines' },
        { id: 2, name: 'South Dakota School of Mines' },
        { id: 3, name: 'Texas A&M' },
        { id: 4, name: 'University of Texas' },
        { id: 5, name: 'University of Colorado' },
        { id: 6, name: 'University of Wyoming' },
        { id: 7, name: 'University of Nebraska' },
        { id: 8, name: 'University of Kansas' },
        { id: 9, name: 'University of Oklahoma' },
        { id: 10, name: 'University of Missouri' }];

    const [filteredData, setFilteredData] = useState(data);
    // Function to filter data based on query
    const handleSearch = (query) => {
        setQuery(query);
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };


    return (
        <div className="landing">
            <div className="searchContainer">
                <h1 className="motto">Find your college home.</h1>
                <SearchBar />
            </div>
            <div className="buttonContainer">
                <Link to='/rent' className="directory-button" onClick={() => { setFilters({ ...filters, school: 'A&M' }) }}>A&M</Link>
                <Link to='/rent' className="directory-button" onClick={() => { setFilters({ ...filters, school: 'Mines' }) }}>Mines</Link>
            </div>

            {/* Other links */}
        </div>
    )
}