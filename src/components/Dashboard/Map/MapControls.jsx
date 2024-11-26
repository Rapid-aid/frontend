import { useMap } from "react-leaflet";
import { Add, Remove } from "@mui/icons-material";

function MapControls() {
    const map = useMap();
  
    const zoomIn = () => {
      if (map) {
        const currentZoom = map.getZoom();
        map.setZoom(currentZoom + 1);
      }
    };
  
    const zoomOut = () => {
      if (map) {
        const currentZoom = map.getZoom();
        map.setZoom(currentZoom - 1);
      }
    };
  
    return (
      <div className="top-20 md:top-4 right-4 z-[500] absolute gap-2">
        <div className="bg-white shadow-md rounded-lg divide-y-[1px]">
          <button
            type="button"
            onClick={zoomIn}
            className="block p-3 text-neutral-500 hover:text-neutral-950 hover:text-red duration-200 cursor-pointer"
          >
            <Add />
          </button>
          <button
            type="button"
            onClick={zoomOut}
            className="block p-3 text-neutral-500 hover:text-neutral-950 hover:text-red duration-200 cursor-pointer"
          >
            <Remove />
          </button>
        </div>
      </div>
    );
  }

  export default MapControls