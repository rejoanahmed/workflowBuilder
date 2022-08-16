import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Types } from "../src/DnDConstants";
import Flow, { FlowProps } from "./Flow";
export type Flows = FlowProps[] | undefined;

function Build() {
  const [flows, setflows] = useState<Flows>([]);
  return (
    <div className="h-80 bg-red-50">
      {flows?.map((flow) => (
        <Flow
        // id={flow.id}
        // conditions={flow.conditions}
        // actions={flow.actions}
        />
      ))}
    </div>
  );
}

export default Build;
