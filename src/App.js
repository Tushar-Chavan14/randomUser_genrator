import { Route, Routes } from "react-router-dom";
import UserLocation from "./components/location/UserLocation";
import RandomUser from "./components/useritem/RandomUser";
import { Data } from "./components/data/Context";
import { useState } from "react";

function App() {
  const [latlong, setlatlong] = useState();

  console.log(latlong)

  return (
    <>
      <Data.Provider value={{ latlong, setlatlong }}>
        <Routes>
          <Route path="/" element={<RandomUser />} exact />
          <Route path="/userlocation" element={<UserLocation />} exact />
        </Routes>
      </Data.Provider>
    </>
  );
}

export default App;
