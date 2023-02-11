import React, { useEffect, useState, useRef } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useUserContext } from './context/userContext'
import SignOut from './SignOut'
import './Style.css'

const Profile = () => {
    //collecting the data from the context
    const { users } = useUserContext()
    // collectin the id using use param Hook
    const { id } = useParams()
    //filtering the user by id
    const profile = users.filter(value => value.id === Number(id))

    //initial title of the page 
    const [pageTitle, setPageTitle] = useState('Home');

    // to perofrom signOut popUp

    const [signOutModal, SetSignOutModal] = useState(false)


    // assigning all the path and title to the form of array of object

    const titleMap = [
        { path: `/profile/${id}`, title: 'Profile' },
        { path: `/profile/${id}/post`, title: 'Post' },
        { path: `/profile/${id}/gallery`, title: 'Gallery' },
        { path: `/profile/${id}/todoList`, title: 'Todo List' }
    ]

    //useLocation hook its return the object

    let curLoc = useLocation();

    // here iam creating temprary function and assignning the ussRef hook 
    // to perform use effect missing dependency
    const tempFun = useRef()


    // filtering title of the page by path (useLocatin)
    const filterTitleName = () => {
        const curTitle = titleMap.find(item => item.path === curLoc.pathname)
        if (curTitle && curTitle.title) {
            setPageTitle(curTitle.title)
        }
    }

    //assigning current value

    tempFun.current = filterTitleName

    useEffect(() => {
        tempFun.current()
    }, [curLoc])


    // to show signOut popUp

    const showPopUp = () => {
        SetSignOutModal(true)
    }

    return (
        <>
            <div className='container'>
                <div className='text'>{pageTitle} </div>
                <div>
                    {
                        profile.map((CurEle) => {
                            return (
                                <div key={CurEle.id} className='profile_parent' onClick={showPopUp} >
                                    <img src={CurEle.profilepicture} alt={CurEle.name} height='40px' width='40px' style={{ borderRadius: '50%', marginTop: '3px' }} />
                                    <div style={{ margin: '10px' }}>{CurEle.name}  </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr />
            {/* conditional rendering */}
            {
                signOutModal ? <SignOut flag={signOutModal} flagFuntion={SetSignOutModal} /> : null
            }
        </>
    )
}

export default Profile