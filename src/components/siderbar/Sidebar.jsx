import './Sidebar.css'
import {LineStyle, Timeline,TrendingUp} from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active">
                        <LineStyle className = 'sidebarIcon'/>
                        Home
                        </li>
                        <li className="sidebarListItems">
                        <Timeline className = 'sidebarIcon' />
                        Analytics
                        </li>
                        <li className="sidebarListItems">
                        <TrendingUp className = 'sidebarIcon' />
                        Sales
                        </li>

                    </ul>
                    
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active">
                        <LineStyle className = 'sidebarIcon'/>
                        Home
                        </li>
                        <li className="sidebarListItems">
                        <Timeline className = 'sidebarIcon' />
                        Analytics
                        </li>
                        <li className="sidebarListItems">
                        <TrendingUp className = 'sidebarIcon' />
                        Sales
                        </li>

                    </ul>
                    
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active">
                        <LineStyle className = 'sidebarIcon'/>
                        Home
                        </li>
                        <li className="sidebarListItems">
                        <Timeline className = 'sidebarIcon' />
                        Analytics
                        </li>
                        <li className="sidebarListItems">
                        <TrendingUp className = 'sidebarIcon' />
                        Sales
                        </li>

                    </ul>
                    
                </div>
            </div>
            
        </div>
    )
}
