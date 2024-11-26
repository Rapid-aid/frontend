import { INCIDENT_STYLES } from '../../data/incidentStyles';
import { STATUS_LABELS } from '../../data/incidentsAndCrews';

function Incident({type, name, time, location, status, statusBackground, statusColor  }) {
    const { Icon, bgColor } = INCIDENT_STYLES[type] || INCIDENT_STYLES.OTHER;

    return (
        <> 
        <li className="flex justify-between items-start gap-2 hover:bg-neutral-50 p-4 cursor-pointer">
            <div className="flex items-start gap-2">
                <span className={`flex ${bgColor} p-[.45rem] rounded-full text-white mt-1`}><Icon /></span>
                <div className="space-y-[.2rem] details">
                    <p className="font-semibold leading-5">{name}</p>
                    <p className="text-gray-500 text-sm">{time}</p>
                    <p className="text-gray-500 text-sm">{location}</p>
                </div>
            </div>
            <div className="flex flex-col space-y-1 text-end">
                <div className={`inline-block ${statusBackground} px-2 py-1 rounded-md font-bold text-center ${statusColor} text-xs`}>
                    {STATUS_LABELS[status] || status}
                </div>
            </div>
        </li>
        </>
    )
}

export default Incident