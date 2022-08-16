import React, { useState } from "react";
import Column from "./Column";
import { Types } from "../src/DnDConstants";
import Item, { Iteminterface } from "./Item";
import { useDrop } from "react-dnd";
export interface FlowProps {
  id: string;
  actions: Iteminterface[];
  conditions: Iteminterface[];
}

function Flow() {
  const [data, setdata] = useState<Iteminterface>();
  const [, drop] = useDrop<Iteminterface>({
    accept: [Types.ACTION_ITEM, Types.CONDITION_ITEM],
    drop(item, monitor) {
      setdata((): Iteminterface => item);
    },
  });
  console.log(data);
  return (
    <div className="mt-4 pb-4" ref={drop}>
      {/* <Column
        flowId={id}
        acceptType={Types.CONDITION_ITEM}
        items={conditions}
      />
      <Column flowId={id} acceptType={Types.ACTION_ITEM} items={actions} /> */}
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
    </div>
  );
}

export default Flow;
