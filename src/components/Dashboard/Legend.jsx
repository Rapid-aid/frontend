import LegendItem from "./LegendItem";

function Legend() {
  return (
    <>
      <div className="top-20 md:top-4 right-16 z-10 absolute bg-white shadow-md mr-2 rounded-xl w-[280px] min-w-[280px] font-[system-ui]">
        <div className="flex justify-between p-2">
          <h2 className="px-2 py-1 font-semibold text-lg">Legenda</h2>
        </div>
        <div className="flex gap-2 px-3 pb-2">
          <div className="w-1/2">
            <LegendItem image="Emergency/Fire.svg" name="Pożar" />
            <LegendItem image="Emergency/Flood.svg" name="Powódź" />
            <LegendItem image="Emergency/Earthquake.svg" name="Trzęsienie ziemi" />
            <LegendItem image="Emergency/Accident.svg" name="Wypadek" />
            <LegendItem image="Emergency/Other.svg" name="Inne" />
          </div>
          <div className="w-1/2">
            <LegendItem image="Crew/Ambulance.svg" name="Pogotowie" />
            <LegendItem image="Crew/FireStation.svg" name="Straż Pożarna" />
            <LegendItem image="Crew/Police.svg" name="Policja" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Legend;
