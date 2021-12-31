import './widgetSm.css'
import {Visibility} from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className = 'WidgetSm'>
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src = 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=' ait= 'Settings' className="wedgetSmImg"></img>
                    <div className="wedgetSmUser">
                        <span className="widgetSmUsername">Jason Mong</span>
                        <span className="widgetSmUserTitle">Backend Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className = 'widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src = 'https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA=' ait= 'Settings' className="wedgetSmImg"></img>
                    <div className="wedgetSmUser">
                        <span className="widgetSmUsername">Jason Mong</span>
                        <span className="widgetSmUserTitle">Backend Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className = 'widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src = 'https://media.istockphoto.com/photos/closeup-portrait-of-woman-touching-her-face-picture-id628536910?k=20&m=628536910&s=612x612&w=0&h=D3p1y1luFYIRDhiD1TonFnfbLXs2mAKAVXnKPu_sCWo=' ait= 'Settings' className="wedgetSmImg"></img>
                    <div className="wedgetSmUser">
                        <span className="widgetSmUsername">Jason Mong</span>
                        <span className="widgetSmUserTitle">Backend Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className = 'widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src = 'https://media.istockphoto.com/photos/mature-african-american-man-picture-id481193816?k=20&m=481193816&s=612x612&w=0&h=0O4zfPIKtdIjCB2u0tW8RU8zMI9GXfcxMGLv1xYmEaY=' ait= 'Settings' className="wedgetSmImg"></img>
                    <div className="wedgetSmUser">
                        <span className="widgetSmUsername">Jason Mong</span>
                        <span className="widgetSmUserTitle">Backend Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className = 'widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src = 'https://media.istockphoto.com/photos/girl-with-perfect-smile-is-posing-at-the-studio-picture-id1200864791?k=20&m=1200864791&s=612x612&w=0&h=bU6ICC8RBg9bWiY2ekeXLUHZOWCOcPEahQZ9Aplrohg=' ait= 'Settings' className="wedgetSmImg"></img>
                    <div className="wedgetSmUser">
                        <span className="widgetSmUsername">Jason Mong</span>
                        <span className="widgetSmUserTitle">Backend Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className = 'widgetSmIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
