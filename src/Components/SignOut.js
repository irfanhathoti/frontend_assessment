import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useUserContext } from './context/userContext'
import {HiXMark} from 'react-icons/hi2'

const SignOut = ({flagFuntion}) => {
    const navigate = useNavigate()
    const toProfile = (id) => {
        removeThePopUp()
        navigate(`/profile/${id}`)
    }


    const { users } = useUserContext()
    const { id } = useParams()
    const profile = users.filter(value => value.id === Number(id))

    const removeThePopUp = () =>{
        flagFuntion(false)
    }

    const signOut = () => {
        navigate('/')
    }
    return (
        <div className='sigOut_parent'>
            <div >
                {
                    profile.map((Cur) => {
                        return (
                            <div key={Cur.id}>
                                <div style={{ textAlign: 'end', fontSize: '24px', cursor: 'pointer' }}  > <HiXMark onClick={removeThePopUp} /> </div>
                                <img src={Cur.profilepicture} alt={Cur.name} height='70px' width='70px' style={{ borderRadius: '50%' }} />
                                <div> {Cur.name} </div>
                                <div> {Cur.email} </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="login_user">
                {
                    users.slice(3, 6).map((CurEl) => {
                        const { name, profilepicture, id } = CurEl
                        return (
                            <div key={id} >
                                <hr />
                                <div onClick={() => toProfile(id)} className='profile_parent1'>
                                    <img src={profilepicture} alt={name} height='40px' width='40px' style={{ borderRadius: '50%' }} />
                                    <div className='text1' > {name} </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={signOut}> Sign Out </button>

        </div>
    )
}

export default SignOut