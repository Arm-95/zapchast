import React from "react"
import "./styles/index.css";

import { HelmetLayout } from "./layouts";
import { Home } from "./containers"


const App = () => {
  return (
    <HelmetLayout title="Home" metaDescription="home page for shop"   >
      {/* <HomeContainer productList={allData} categori='home' /> */}
      <Home />
    </HelmetLayout>
  );
}

export default App;
