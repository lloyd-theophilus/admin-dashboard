import Charts from '../../charts/Charts'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './Home.css'
import { Userdata } from '../../userData'
import WidgetLg from '../../Widgets/widgetLg/widgetLg'
import WidgetSm from '../../Widgets/widgetSm/widgetSm'

export default function Home() {
    return (
        <div className = 'home'>
            <FeaturedInfo/>
            <Charts data = {Userdata} title = 'User Analytics' grid datakey = 'Active User'/>
            <div className="homewidget">
            <WidgetSm/>
            <WidgetLg/>
            </div>
        </div>
    )
}
