import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { DndProvider } from "react-dnd";
import useSWR from "swr";
// import Build from "./Build";
import Flow from "./Flow";
import { Iteminterface } from "./Item";
// import { HTML5Backend } from "react-dnd-html5-backend";

export const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((r) => r.json());

function WFBuilder({
  onSelect,
  value,
}: {
  onSelect: any;
  value: Iteminterface | null;
}) {
  const { data: eventD, error: eventErr } = useSWR<Iteminterface[]>(
    "/api/events",
    fetcher
  );
  let label: string, options: Iteminterface[];
  if (!eventD) {
    label = "loading Events";
    options = [];
  } else {
    label = "Select an Event";
    options = eventD;
  }
  return (
    <div className="col-span-2 bg-slate-500 p-4">
      <Autocomplete
        value={value}
        options={options}
        className="mx-auto w-80 bg-purple-400"
        onChange={onSelect}
        renderInput={(params) => <TextField {...params} label={label} />}
        getOptionLabel={(option) => option.title}
      />

      {value && (
        <div>
          {" "}
          <Button
            variant="contained"
            color="secondary"
            className="bg-green-800 fixed bottom-3"
          >
            Build
          </Button>
          <div className="mt-2">
            <div className="grid grid-cols-2">
              <h1 className="font-bold text-center border-r-4">IF</h1>
              <h1 className="font-bold text-center">DO</h1>
            </div>
            <Flow />
          </div>
        </div>
      )}
    </div>
  );
}

export default WFBuilder;
