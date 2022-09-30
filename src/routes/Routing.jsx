import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, PreSeed } from "../pages/Page";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pre-seed" element={<PreSeed />} />
      </Routes>
    </>
  );
};

export default Routing