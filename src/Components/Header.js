import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ChatSection from './ChatSection'
import './Style.css'

const Header = () => {
    //getting the id using useParam hook in react router dom
    const { id } = useParams()
    return (
        <div>
            <div className='navbar'>
                <ul>
                    <li>
                        <NavLink to={`/profile/${id}`} className='navLinks'>Profile </NavLink>
                        <div className='border'></div>
                    </li>
                    <li>
                        <NavLink to={`/profile/${id}/post`} className='navLinks'>Post</NavLink>
                        <div className='border'></div>
                    </li>
                    <li>
                        <NavLink to={`/profile/${id}/gallery`} className='navLinks'>Gallery</NavLink>
                        <div className='border'></div>
                    </li>
                    <li>
                        <NavLink to={`/profile/${id}/todoList`} className='navLinks'>TodoList</NavLink>
                    </li>
                </ul>
            </div>
          <ChatSection />
        </div>
    )
}

export default Header