import React, { createRef, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Types } from "../src/DnDConstants";
import Item, { Iteminterface } from "./Item";

function Column({
  items,
  acceptType,
  flowId,
}: {
  items: Iteminterface[];
  acceptType: string;
  flowId: string;
}) {
  let i = 0;
  const [{ over }, drop] = useDrop({
    accept: acceptType,

    drop(item, monitor) {},
    collect(monitor) {
      return { over: monitor.isOver() };
    },
  });

  return drop(
    <div className="h-52 bg-red-200">
      {items.map((item) => (
        <Item type={acceptType} item={item} />
      ))}
    </div>
  );
}

export default Column;
