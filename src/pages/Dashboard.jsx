import '../index.css'
import Header from '../components/Layout/Header.jsx'
import Sidebar from '../components/Dashboard/Sidebar.jsx'
import MapContainer from '../components/Dashboard/Map/MapContainer.jsx'
import NavMobile from '../components/Layout/NavMobile.jsx'
import Controls from '../components/Dashboard/Controls.jsx'

function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="relative flex grow">
            <Sidebar />
            <div className="relative flex-grow">
            <MapContainer />
            <Controls />
            </div>
        </div>
        <NavMobile />
    </div>
    );
}

export default Dashboard