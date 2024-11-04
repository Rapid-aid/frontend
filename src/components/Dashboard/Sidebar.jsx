import React, { useState } from 'react';
import  { ExpandMore, ExpandLess, Search, Tune, LocalFireDepartmentOutlined, FloodOutlined, CarCrashOutlined, QuestionMark } from '@mui/icons-material';
import Incident from './Incident';


    function Sidebar() {

        const [visibility, setVisibility] = useState({
            filtersPopup: false,
            incidentList: true,
        });

        const toggleVisibility = (section) => {
            setVisibility(prevState => ({
              ...prevState,
              [section]: !prevState[section],
            }));
          };

        return (
            <>
            <div className="z-[1]">
                <div className="absolute flex gap-2 mx-4 md:mx-6 my-4 w-[calc(100%-2rem)] md:w-[400px]">
                    <div 
                        className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 shadow-md px-4 py-2 border rounded-full font-medium duration-200 cursor-pointer"
                        onClick={() => toggleVisibility('filtersPopup')}
                    >
                        <Tune/>
                        Filtry
                        {visibility.filtersPopup ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                    </div>
                    <div>
                        <form action="" className="inline-flex relative items-center gap-2 bg-white shadow-md border rounded-full max-w-[320px] font-medium transition-all duration-200">
                            <input id="search" className="bg-transparent px-4 py-2 pr-9 rounded-full w-full" type="text" placeholder="Wyszukaj"/>
                            <label htmlFor="search" className="right-3 absolute"><Search /></label>
                        </form>
                    </div>
                    {visibility.filtersPopup && (
                        <div className="top-12 absolute bg-white shadow-md px-4 py-3 rounded-xl filtersPopup">
                        <div className="flex justify-between items-center py-1 gap-x-10">
                            <div className="font-semibold text-lg">Filtry</div>
                            <div className="hover:bg-neutral-100 px-2 py-1 rounded-md text-neutral-600 text-sm hover:text-black duration-200 cursor-pointer">Wyczyść filtry</div>
                        </div>
                        <div className="py-2 font-semibold">Status</div>
                        <div className="flex flex-col">
                            <div class="flex items-center mb-2">
                                <input id="new" type="checkbox" value="1" class="" />
                                <label for="new" class="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2">Nowe</label>
                            </div>
                            <div class="flex items-center mb-2">
                                <input id="on-the-way" type="checkbox" value="2" class="" />
                                <label for="on-the-way" class="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2">W drodze</label>
                            </div>
                            <div class="flex items-center mb-2">
                                <input id="on-the-way" type="checkbox" value="3" class="" />
                                <label for="on-the-way" class="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2">Na miejscu</label>
                            </div>
                            <div class="flex items-center mb-2">
                                <input id="on-the-way" type="checkbox" value="4" class="" />
                                <label for="on-the-way" class="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2">Zamknięte</label>
                            </div>
                        </div>
                        <div className="py-2 font-semibold">Rodzaj zdarzenia</div>
                        <div className="flex flex-col">
                            <div class="flex items-center mb-2">
                                <input id="fire" type="checkbox" value="1" class="" />
                                <label for="fire" class="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2">Pożar</label>
                            </div>
                            <div class="flex items-center mb-2">
                                <input id="flood" type="checkbox" value="2" class="" />
                                <label for="flood" class="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2">Zalanie</label>
                            </div>
                            <div class="flex items-center mb-2">
                                <input id="car-crash" type="checkbox" value="3" class="" />
                                <label for="car-crash" class="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2">Wypadek</label>
                            </div>
                            <div class="flex items-center mb-2">
                                <input id="other" type="checkbox" value="4" class="" />
                                <label for="other" class="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2">Inne</label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                        <div className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold text-center text-white duration-200 cursor-pointer">Zastosuj</div>
                        </div>
                        
                    </div>
                    )}
                    

                </div>
                <div className="bottom-20 sm:bottom-4 absolute bg-white shadow-md mx-4 rounded-lg divide-y w-[calc(100%-2rem)] sm:w-[400px]">
                    <div className="flex justify-between p-2">
                        <h2 className="p-2 font-semibold text-xl">Ostatnie zgłoszenia</h2>
                        <div 
                        className="hover:bg-neutral-200 my-auto p-2 rounded-lg duration-200 cursor-pointer"
                        onClick={() => toggleVisibility('incidentList')}
                        >
                            {visibility.incidentList ? (
                                <ExpandMore />
                            ) : (
                                <ExpandLess />
                            )}
                        </div>
                    </div>
                    {visibility.incidentList && (
                        <ul className="divide-y max-h-[300px] overflow-y-auto">
                            <Incident 
                                typeColor="bg-gray-600"
                                Icon={QuestionMark}
                                name="Nieznane"
                                time="14:00, 14.10.2024"
                                location="Obozowa 92, 00-462 Warszawa"
                                status="Nowe"
                                statusBackground="bg-blue-100"
                                statusColor="text-blue-700"
                            />
                            <Incident 
                                typeColor="bg-red-600"
                                Icon={LocalFireDepartmentOutlined}
                                name="Pożar"
                                time="12:30, 14.10.2024"
                                location="Karmelicka 3CK, 00-149 Warszawa"
                                status="Nowe"
                                statusBackground="bg-blue-100"
                                statusColor="text-blue-700"
                            />
                            <Incident 
                                typeColor="bg-yellow-600"
                                Icon={CarCrashOutlined}
                                name="Wypadek"
                                time="12:20, 14.10.2024"
                                location="Karmelicka 3CK, 00-149 Warszawa"
                                status="W drodze"
                                statusBackground="bg-yellow-100"
                                statusColor="text-yellow-700"
                            />
                            <Incident 
                                typeColor="bg-blue-600"
                                Icon={FloodOutlined}
                                name="Zalanie"
                                time="11:30, 14.10.2024"
                                location="Karmelicka 3CK, 00-149 Warszawa"
                                status="Zamknięte"
                                statusBackground="bg-green-100"
                                statusColor="text-green-700"
                            /> 
                        </ul>
                    )}
                </div>
            </div>
            </>
    )
}

export default Sidebar