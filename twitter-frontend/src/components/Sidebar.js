import React from 'react'
import {FaTwitter,FaHome,FaHashtag,FaRegBell,FaRegEnvelope,FaRegBookmark,FaListAlt,FaUserAlt,FaMehBlank} from "react-icons/fa"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <ul>
            <li>
                <Link to='/'>
                    <FaTwitter className='icons logo'/>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <FaHome className='icons logo'/>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/discover'>
                    <FaHashtag className='icons'/>
                    Discover
                </Link>
            </li>
     
            <li>
                <Link to='/notification'>
                    <FaRegBell className='icons'/>
                    Notifications
                </Link>
            </li>
            <li>
                <Link to='/message'>
                    <FaRegEnvelope className='icons'/>
                    Messageses
                </Link>
            </li>
            <li>
                <Link to='/bookmarks'>
                    <FaRegBookmark className='icons'/>
                    Bookmarks
                </Link>
            </li>
            <li>
                <Link to='/list'>
                    <FaListAlt className='icons'/>
                    List
                </Link>
            </li>
            <li>
                <Link to='/memo'>
                    <FaUserAlt className='icons'/>
                    Profile
                </Link>
            </li>
            <li>
                <Link to='/more'>
                    <FaMehBlank className='icons'/>
                    More
                </Link>
            </li>
            <div className='sidebar_Btn'>
                <Link to='/tweet'>Tweetle</Link>
            </div>
        </ul>

    </div>
  )
}

export default Sidebar