function Incident({ typeColor, Icon, name, time, location, status, statusBackground, statusColor  }) {

    return (
        <> 
        <li className="flex justify-between items-start gap-2 hover:bg-neutral-50 p-4 cursor-pointer">
            <div className="flex items-start gap-2">
                <span className={`flex ${typeColor} p-[.45rem] rounded-full text-white`}><Icon /></span>
                <div className="space-y-[.2rem] leading-none details">
                    <p className="font-semibold">{name}</p>
                    <p className="text-gray-500 text-sm">{time}</p>
                    <p className="text-gray-500 text-sm">{location}</p>
                </div>
            </div>
            <div className="space-y-1 text-end">
                <div className={`inline-block ${statusBackground} px-2 py-1 rounded-md font-bold text-center ${statusColor} text-xs`}>
                    {status}
                </div>
            </div>
        </li>
        </>
    )
}

export default Incident