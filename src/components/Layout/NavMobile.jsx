
import {Map, Assignment, BarChart} from '@mui/icons-material';

function NavMobile() {
    return (
        <>
        <nav className="bottom-0 fixed flex justify-around sm:hidden bg-white shadow-md p-2 w-full">
            <button className="flex flex-col items-center text-blue-500">
                <Map style={{ fontSize: 28 }}  />
                <span className="text-xs">Mapa</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
                <Assignment style={{ fontSize: 28 }}  />
                <span className="text-xs">Zgłoszenia</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
                <BarChart style={{ fontSize: 28 }}  />
                <span className="text-xs">Statystyki</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
                <img src="../test-avatar.png" alt="" className="rounded-full size-7" />
                <span className="text-xs">Profil</span>
            </button>

        </nav>
        </>
    )
}

export default NavMobile