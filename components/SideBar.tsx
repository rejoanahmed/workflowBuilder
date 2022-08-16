import { Button } from "@mui/material";
import Item, { Iteminterface } from "./Item";
import { Types } from "../src/DnDConstants";
import { fetcher } from "./WFBuilder";
import useSWR from "swr";

interface Props {
  name: "ACTION" | "CONDITION";
  eventid: string | undefined;
}

function SideBar({ name, eventid }: Props) {
  const { data: actionsD, error: actionsErr } = useSWR<Iteminterface[]>(
    eventid ? "http://localhost:3000/api/actions" : null,
    fetcher
  );

  const { data: conditionD, error: conditionErr } = useSWR<Iteminterface[]>(
    eventid ? `http://localhost:3000/api/conditions/${eventid}` : null,
    fetcher
  );
  let items: Iteminterface[] | undefined, error;
  name === "ACTION" ? (items = actionsD) : (items = conditionD);
  name === "ACTION" ? (error = actionsErr) : (error = conditionErr);

  if (!eventid) {
    return (
      <div className="bg-slate-900 h-screen flex items-center sticky top-0">
        <h1 className=" text-slate-600 text-center w-full text-3xl font-extrabold">
          Select an event
        </h1>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-900 px-8 py-0 h-screen overflow-auto sticky top-0 shadow-lg">
        <h1 className="text-slate-600 font-bold uppercase mb-7 text-center text-2xl sticky top-0 p-4 bg-inherit">
          {name}
        </h1>
        {!items && !error ? (
          <div className="bg-slate-900 flex items-center sticky top-0">
            <h1 className=" text-slate-600 text-center w-full text-3xl font-extrabold">
              Loading
            </h1>
          </div>
        ) : error ? (
          <div className="bg-slate-900 flex items-center sticky top-0">
            <h1 className=" text-slate-600 text-center w-full text-3xl font-extrabold">
              error!!!
            </h1>
          </div>
        ) : (
          <>
            {" "}
            <ul className="grid gap-2">
              {items!.map((item, i) => (
                <Item
                  key={JSON.stringify(item)}
                  item={item}
                  type={
                    name == "ACTION" ? Types.ACTION_ITEM : Types.CONDITION_ITEM
                  }
                />
              ))}
            </ul>
            <div className="sticky bg-inherit bottom-0 p-4">
              <Button
                className="text-center block rounded-full mx-auto px-4 py-2 shadow-md"
                color="info"
                variant="outlined"
              >
                {" "}
                ADD {name}
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default SideBar;
