import React, { useState } from 'react'
import { useUserContext } from './context/userContext'
import "./Style.css"
import { BsChatRight } from 'react-icons/bs'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { HiXMark } from 'react-icons/hi2'
import { FaLocationArrow } from 'react-icons/fa'


const ChatProfiles = () => {
    //collectint the data from the context
    const { users } = useUserContext()

    //here iam calling the useState hook its initial valu false to perform popUp
    //of all user Profil(Chat)
    const [chatModal, setChatModal] = useState(false)

    //  selected profile data to perform chat popUp
    const [profileMessage, setProfileMessage] = useState([])

    //to  popUp of seceted user chat
    const [chatPopUp, setChatPopUp] = useState(false)

    // filtering the selected user chat by by id
    const filterChatProfil = (id) => {
        const newData = users.filter((value) => value.id === id)
        //updating the state 
        setProfileMessage(newData)
        //selected user chat will be popUp
        setChatPopUp(true)

    }

    // its remove the selected user chat popUp

    const removePopUps = () => {
        setChatPopUp(false)
    }


    // users chat popUp


    const showChatProfiles = () => {
        setChatModal(!chatModal)
        setChatPopUp(false)
    }


    return (
        <>
        {/*  */}
            <div className='chat_container'>
                <div className="chat_bar">
                    <div>
                        <BsChatRight />
                        <span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '10px' }}>Chat</span>
                    </div>
                    <div style={{ marginTop: '4px', cursor: 'pointer' }} onClick={showChatProfiles} >
                        {chatModal ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                    </div>
                </div>
                <div className={chatModal ? 'chatprofilesModul' : "chatBox"}>
                    {
                        users.map((CurElem) => {
                            const { name, profilepicture, id } = CurElem

                            return (
                                <div key={id} className='parent'>
                                    {
                                        chatModal ? <>
                                            <div className="chat_profile" onClick={() => filterChatProfil(id)}>
                                                <img src={profilepicture} height='23px' width='23px' style={{ borderRadius: '50%' }} alt={name} />
                                                <span> {name} </span>
                                            </div>
                                            <div className="greenTick"> </div>
                                        </> : null
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            {/* Chats section*/}

            {
                // conditional rendering
                chatPopUp ?
                    <div className='chat' >
                        <div className="chat_bar" >
                            {
                                profileMessage.map((val) => {
                                    const { name, id, profilepicture } = val
                                    return (
                                        <div style={{ display: 'flex' }} key={id}>
                                            <div>
                                                <img src={profilepicture} alt={name} height='30px' width='30px' style={{ borderRadius: '50%' }} />
                                            </div>
                                            <div style={{ margin: '7px' }}>
                                                <span> {name} </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div style={{ marginTop: '6px' }}>
                                <span style={{ cursor: 'pointer', margin: '5px' }} onClick={showChatProfiles} >  {chatModal ? <RiArrowUpSLine /> : <RiArrowDownSLine />} </span>
                                <HiXMark onClick={removePopUps} style={{ cursor: 'pointer' }} />
                            </div>
                        </div>
                        <div className='chat_section'>
                            <div>
                                <span className='chatText chatText1'>
                                    Lorem Ipsum has been the industry's standard
                                </span>
                                <span className='chatText'>
                                    Lorem Ipsum has been
                                </span>
                            </div>
                            <div style={{ textAlign: 'center' }}> 9:45 PM </div>

                            <div>
                                <span className='chatText chatText1'>
                                    Lorem Ipsum has been the industry's standard
                                </span>
                                <span className='chatText'>
                                    Lorem Ipsum has been
                                </span>
                            </div>

                        </div>
                        <div className='send'>
                            <input type='text' />
                            <FaLocationArrow style={{ cursor: 'pointer' }} />
                        </div>
                    </div> : null
            }
        </>
    )
}

export default ChatProfiles