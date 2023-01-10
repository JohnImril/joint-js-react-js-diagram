import React from "react";
import {
  Marker,
  TileLayer,
  MapContainer,
  Popup,
  Rectangle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Graph from "../Graph/Graph";
import JointLayer from "../JointLayer/JointLayer";
import L, { LeafletMouseEvent, Map } from "leaflet";

import "./Map.css";

const position = [51.505, -0.09];
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

var corner1 = L.latLng(51.49, -0.08),
  corner2 = L.latLng(51.5, -0.06),
  bounds = L.latLngBounds(corner1, corner2);

const Maps = () => {
  return (
    <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Graph
        title={"My Button Title"}
        bounds={bounds}
        description="This is a custom description!"
      />

      <JointLayer />
      <Rectangle className="rectangle" bounds={rectangle} />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Maps;
