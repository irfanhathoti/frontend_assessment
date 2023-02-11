import React from 'react'
import Header from './Header'
import Profile from './Profile'
import './Style.css'

const CommingSoon = () => {
    
    return (
        <div>
            <div className='commingSoon_parent'>
                <Header />
                <div className='profile_detail'>
                    <Profile />
                    <div className='commingSoon_container'>
                        <div> Comming Soon </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommingSoon