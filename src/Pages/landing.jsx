import "./landing.css"
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ApiContext } from "../context"

export const LandingPage = () => {

    const [filters, setFilters] = useContext(ApiContext)

    return (
        <div className="landing">
            <div className="landing-directory">
                <Link 
                    to='/rent' 
                    className="directory-button" 
                    onClick={() => {setFilters({...filters, school:'A&M'})}}
                >A&M
                </Link>
                <Link to='/rent' 
                className="directory-button"
                onClick={() => {setFilters({...filters, school:'Mines'})}}
                >Mines</Link>
            </div>
        </div>
    )
}