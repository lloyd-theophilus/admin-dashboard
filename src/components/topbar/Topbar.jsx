import React from 'react';
import './Topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className = 'topbar'>
            <div className="topbarWrapper">
                <div className="topbarleft">
                    <span className = 'logo'>Admin</span>
                </div>
                <div className="topbarright">
                    <div className="topbarIconcontainer">
                        <NotificationsNone />
                        <span className = 'topbarIconBadge'>1</span>

                    </div>
                    <div className="topbarIconcontainer">
                        <Language />
                    </div>
                    <div className="topbarIconcontainer">
                        <Settings />
                    </div>
                    <img src="./components/images/Settings-amico.svg" alt="" className = 'topAvatar' />
                </div>

            </div>
            
        </div>
    )
}

