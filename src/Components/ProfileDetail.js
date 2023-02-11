import React from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from './context/userContext'
import Header from './Header'
import Profile from './Profile'

const ProfileDetail = () => {
    //collectin the all data from the context
    const { users } = useUserContext()
    // filtering the user by id
    const { id } = useParams()
    const profile = users.filter(value => value.id === Number(id))
    return (
        <>
            <div className='profile_container'>
                <div>
                    <Header />
                </div>
                <div className='profile_detail'>
                    {/* profile component */}
                    <Profile />
                    {
                        // mapping the profile detials
                        profile.map((CurElem) => {
                            const { id, name, username, profilepicture, email, phone, website, address, company } = CurElem
                            return (
                                <div key={id} className='all_details'>
                                    <div className='user_container'>
                                        <div className='user_detail'>
                                            <div className='profileImage'>
                                                <img src={profilepicture} alt={name} height='150px' width='150px' style={{ borderRadius: '50%' }} />
                                                <p >
                                                    {name}
                                                </p>
                                            </div>
                                            <div className='datails'>
                                                <div className=''> <span> Username : </span> <b> {username} </b> </div>
                                                <div className='text1'> <span> Email : </span> <b> {email} </b> </div>
                                                <div className='text1'> <span> Phone : </span> <b> {phone} </b> </div>
                                                <div className='text1'> <span> Website : </span> <b> {website} </b> </div>
                                                <hr />
                                                <p style={{ textAlign: 'center' }}> Company</p>
                                                <div className='text1'> <span> Name : </span> <b> {company.name} </b> </div>
                                                <div className='text1'> <span> catchphrase : </span> <b> {company.catchPhrase} </b> </div>
                                                <div className='text1'> <span> bs : </span> <b> {company.bs} </b> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='address_parent' >
                                        <p> Address: </p>
                                        <div> <span> Street : </span> <b> {address.street} </b> </div>
                                        <div> <span> Suite : </span> <b> {address.suite} </b> </div>
                                        <div> <span> Citye : </span> <b> {address.city} </b> </div>
                                        <div style={{ marginTop: '10px' }} > <span> Zipcode : </span> <b> {address.zipcode} </b> </div>
                                        <div className='map_image'> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d123192.24183462649!2d76.40444361683413!3d15.226428469830767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676037759443!5m2!1sen!2sin" title='map' width="600" height="350" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> </div>
                                        <div> <span>Lat:</span> <b> {address.geo.lat} </b> <span>Long:</span> <b> {address.geo.lng} </b> </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProfileDetail