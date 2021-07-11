import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../assets/avatar.jpg';

import { name, socialLinks } from '../../constant';

import {
    SidebarContainer,
    PersonalDetails,
    Image,
    Name,
    SocialLinkContainer,
    SocialLink,
    NavLinkContainer,
    SidebarLink,
    Em,
    Small
} from './scc';

const Sidebar = props => {

    const nav = [
        { title: 'Home', className: 'fas fa-home', link: '/' },
        { title: 'About', className: 'far fa-user', link: '/about'},
        { title: 'Skills', className: 'fas fa-graduation-cap', link: '/skills'},
        { title: 'Projects', className: 'fas fa-project-diagram', link: '/projects'},
        { title: 'Resume', className: 'fas fa-file', link: 'resume' },
    ];

    return (
        <SidebarContainer shouldVisible = {props.shouldVisible}>
            <PersonalDetails>
                <Image src={Avatar}></Image>
                <Name>{name}</Name>
                
                <SocialLinkContainer>
                    {
                        socialLinks.map(social => <SocialLink target="_blank" bgColor={social.color} key={social.title} title = {social.title} href={social.link}> <em className={social.className}></em></SocialLink>)
                    }
                </SocialLinkContainer>

                <NavLinkContainer>
                    {
                        nav.map(navItem => {
                            return (
                                <NavLink exact activeClassName="active_link" to={navItem.link} style={{ textDecoration: 'none' }} key={navItem.title} >
                                    <SidebarLink>
                                        <Em style={{ fontSize: '20px' }} className={navItem.className}></Em> 
                                        <Small  style={{marginLeft: '10px'}}>{navItem.title}</Small>
                                    </SidebarLink>
                                </NavLink>
                            )
                        })
                    }
                </NavLinkContainer>

            </PersonalDetails>
        </SidebarContainer>
    );
};

export default Sidebar;
