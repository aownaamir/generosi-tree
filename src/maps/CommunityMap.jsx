import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locations = [
  {
    id: 1,
    name: "Community Kitchen",
    description: "Serving meals to the homeless.",
    position: [37.7749, -122.4194], // San Francisco coordinates
  },
  {
    id: 2,
    name: "Clothing Drive",
    description: "Distributing clothes to those in need.",
    position: [34.0522, -118.2437], // Los Angeles coordinates
  },
  {
    id: 3,
    name: "Park Cleanup",
    description: "Cleaning and maintaining public parks.",
    position: [40.7128, -74.006], // New York coordinates
  },
];

const CommunityMap = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Community Service Locations
        </h2>
        <p className="text-gray-600 mt-2">
          Explore the places where we are making a difference
        </p>
      </div>

      <div className="h-[500px] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[37.7749, -122.4194]} // Default center
          zoom={5}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {locations.map((location) => (
            <Marker key={location.id} position={location.position}>
              <Popup>
                <h3 className="font-semibold">{location.name}</h3>
                <p className="text-sm text-gray-600">{location.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default CommunityMap;
