import type { NextPage } from "next";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout />
    </DndProvider>
  );
};

export default Home;
