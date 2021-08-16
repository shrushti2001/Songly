import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/HomeOutlined';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusicOutlined';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import { useDataLayerValue } from '../DataLayer';


export default function Sidebar() {
    const [{playlists},dispatch]=useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>

            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon}title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br></br>
            <strong className="sidebar__title">
                PLAYLISTS
            </strong>
            <hr/>
            {playlists?.items?.map(playlist =>(
                <SidebarOption title={playlist.name}/>
            ))}
        </div>
    )
}
