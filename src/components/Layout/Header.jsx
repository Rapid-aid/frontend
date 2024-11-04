import NavDesktop from './NavDesktop'
import RapidAidLogo from '/logo-header.svg'

function Header() {
    return (
        <>
        <header className="flex justify-between items-center border-gray-300 shadow-lg px-4 md:px-8 py-4 sm:py-2 border-b-[1px] w-full text-neutral-600">
            <img src={RapidAidLogo} className="h-9" />
            <NavDesktop />
        </header>
        </>
    )
}

export default Header