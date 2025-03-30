"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const DynamicMap = dynamic(() => import("./leaflet-map"), { ssr: false });

export default function Map() {
  return <DynamicMap />;
}
