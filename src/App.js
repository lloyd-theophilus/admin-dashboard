import Sidebar from './components/siderbar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import './app.css';


function App() {
  return (
    <div>
      <div>
      <Topbar/>
      </div>
     
      <div className = 'container'>
      <Sidebar/>
      <div className = 'others'>
        otherpages
      </div>
     
     
      </div>
     
    </div>
  );
}

export default App;
