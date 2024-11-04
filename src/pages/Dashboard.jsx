import '../index.css'
import Header from '../components/Layout/Header.jsx'
import Sidebar from '../components/Dashboard/Sidebar.jsx'
import Map from '../components/Dashboard/Map.jsx'
import NavMobile from '../components/Layout/NavMobile.jsx'

function Dashboard() {
    return (
        <>
        <Header />
        <div className="flex grow">
            <Sidebar />
            <Map />
        </div>
        <NavMobile />
        </>
    )
}

export default Dashboard