import React from 'react'
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({ avatar, Icon,title, onClick }) {

    const user =useSelector(selectUser);
    return (
        <div onClick={onClick} className="HeaderOption">
           {Icon && <Icon className="HeaderOption_Icon" />} 
           {avatar && (
            <Avatar className="HeaderOption_icon" >{user?.email[0]}</Avatar>
           )}
           <h3 className="HeaderOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
