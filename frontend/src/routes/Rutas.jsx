import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import ArchivedNotes from "../components/archivedNotes/ArchivedNotes";
import GlobalProvider from "../GlobalProvider/GlobalProvider";

const Rutas = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Home />} />
          <Route path="/archived-notes/" element={<ArchivedNotes />} />
          <Route path="/archived-notes/:category" element={<ArchivedNotes />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default Rutas;
