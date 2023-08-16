import { ApiContext, DropdownContext } from '../../context';
import { FilterProvider } from '../../UseContexts/FilterContext';
import './subnav.css';
import React, { useContext, useState, useEffect} from 'react';
import { useForm } from 'react-hook-form'

export const SubNavbar = (props) => {

    const menuNames = {
    }

    const [menuStates, setMenuStates] = useState(null)

    return (
        <main className='subnav'>
            <DropdownContext.Provider value={[menuStates, setMenuStates]}>
                <ul className="subnav-nav">
                    {props.children}
                </ul>
            </DropdownContext.Provider>
        </main>
    )
}

export const SubNavItem = (props) => {

    const [menuStates, setMenuStates] = useContext(DropdownContext)

    return (
        <li className='nav-item'>
            <a href='#' className='nav-item-button' onClick={() => setMenuStates(
                (menuStates==props.order) ? null : props.order
            )}>
                {props.text}
            </a>
            {menuStates==props.order && props.children}
        </li>
    )
}

export const DropdownMenu = () => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        
    }, []);

    function onSubmit(data){
        console.log(data)
    }

    const DropdownItem = () => {
        return (
            <div>
                
            </div>
        )
    }

    return (
        <form className='dropdown' onSubmit={handleSubmit(onSubmit)}>
            <div className='menu-item'>
                <input type='checkbox' {...register('roomates')}></input>
                <p>Looking for roomates</p>
            </div>
            <div className='menu-item'>
                <input type='checkbox' {...register('sublease')}></input>
                <p>Subleasing</p>
            </div>
            <div className='menu-item'>
                <input type='checkbox' {...register('renting')}></input>
                <p>Renting</p>
            </div>
            <input type='submit' value='Apply'/>
        </form>
    )
    
}

export const MinMaxForm = ({ setValues, submit, getValues }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        let defaultValues = {}
        defaultValues.min = localMin
        defaultValues.max = localMax
        reset({...defaultValues})
    }, []);

    function onSubmit(data){
        setLocalMin(data.min)
        setLocalMax(data.max)
        setValues(data.min, data.max)
    }

    return (
        <form className='min-max' onSubmit={handleSubmit(onSubmit)}>
            <input type='number' className='min' {...register("min")}/>
            <input type='number' className='max' {...register("max")}/>
            <input type='submit' value='Apply'/>
        </form>
    )
}