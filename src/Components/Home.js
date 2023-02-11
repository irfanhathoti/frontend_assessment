import React from 'react'
import './Style.css'
import img from './images/wave (1).svg'
import { NavLink } from 'react-router-dom'
import { useUserContext } from './context/userContext'

const Home = () => {

    //getting all user data from the context
    const { users } = useUserContext()

    return (
        <div className='home_container'>
            <div className='child'>
                <div className='head'>Select an a account</div>
                <div className='profiles_parent'>
                    {/* mapping (itarating ) the all user using map method in the arra  */}
                    {
                        users.map((CurElem) => {
                            // destructuring the data (ECMA6 concept)
                            const { id, name, profilepicture } = CurElem
                            return (
                                <div key={id} style={{ padding: '5px' }} >
                                    <NavLink className='profile' to={`/profile/${id}`} >
                                        <div className='profile_image'>
                                            <img src={profilepicture} alt={name} height='50px' width='50px' style={{ borderRadius: "50px" }} />
                                        </div>
                                        <div style={{ margin: '15px' }}>
                                            {name}
                                        </div>
                                    </NavLink>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* wave svg */}
            <img src={img} alt={img} className='svg' />
        </div>
    )
}

export default Home