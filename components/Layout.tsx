import React, { useState } from "react";
import useSWR from "swr";
import { Iteminterface } from "./Item";
import SideBar from "./SideBar";
import WFBuilder from "./WFBuilder";

function Layout() {
  const [eventValue, setEventValue] = useState<Iteminterface | null>(null);

  const handleSelect = async (e: any, newV: Iteminterface) => {
    setEventValue(newV);
  };

  return (
    <div className="relative grid grid-cols-4 min-h-screen scroll">
      <SideBar eventid={eventValue?.id} name="CONDITION" />
      <WFBuilder onSelect={handleSelect} value={eventValue} />
      <SideBar eventid={eventValue?.id} name="ACTION" />
    </div>
  );
}

export default Layout;
