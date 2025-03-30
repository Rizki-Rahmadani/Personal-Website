import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const position: LatLngExpression = [-6.188247, 106.695431]; // Jakarta

const customIcon = new L.Icon({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LeafletMap = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        width: "100%",
        borderRadius: "15px",
      }}
      className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[525px]"  
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>Ini Rumah Saya!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
