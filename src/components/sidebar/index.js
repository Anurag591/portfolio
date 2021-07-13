import React from 'react';
import { NavLink } from 'react-router-dom';


import Avatar from '../../assets/avatar.jpg';

import { name, socialLinks, CURRENT_DESIGNATION, RESUME_URL } from '../../constant';

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
    Small,

    CopyRight
} from './scc';

import DownloadButton from '../ui/DownloadButton';

const Sidebar = props => {

    const nav = [
        { title: 'Home', className: 'fas fa-home', link: '/' },
        { title: 'About', className: 'far fa-user', link: '/about'},
        { title: 'Skills', className: 'fas fa-graduation-cap', link: '/skills'},
        { title: 'Projects', className: 'fas fa-project-diagram', link: '/projects'},
        // { title: 'Resume', className: 'fas fa-file', link: 'resume' },
        // { title: 'Contact Me', className: 'fas fa-file', link: 'contact' },
    ];

    const download = () => {
        const link = window.document.createElement('a');
        link.href = RESUME_URL;
        link.download = `${ name } | ${ CURRENT_DESIGNATION } | Resume.pdf`;
        link.target = '_blank';
        link.click();
    }

    return (
        <SidebarContainer shouldVisible = {props.shouldVisible}>
            <PersonalDetails>
                <Image src={Avatar}></Image>
                <Name>{name}</Name>
                
                <SocialLinkContainer>
                    {
                        socialLinks.map(social => <SocialLink target={social.newTab ? '_blank' : '_self'} bgColor={social.color} key={social.title} title = {social.title} href={social.link}> <em className={social.className}></em></SocialLink>)
                    }
                </SocialLinkContainer>

                <DownloadButton onClick = {download}>Download Resume </DownloadButton>

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

            <CopyRight>
                No &copy; copyright issue! Feel free to copy.
            </CopyRight>
        </SidebarContainer>
    );
};

export default Sidebar;
