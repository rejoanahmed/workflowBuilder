import React from "react";
import { useDrag, useDrop } from "react-dnd";

export interface Iteminterface {
  id: string;
  title: string;
}

function Item({ item, type }: { item: Iteminterface; type: string }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: {
      item,
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <li
      ref={drag}
      className={`bg-slate-700 rounded-lg py-2 text-center text-yellow-100 w-full overflow-hidden ${
        isDragging && "bg-red-400"
      }`}
    >
      {item.title}
    </li>
  );
}

export default Item;
