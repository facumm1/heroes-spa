import { Routes, Route, Navigate } from "react-router-dom";

import { DcPage, MarvelPage, HeroPage, SearchHeroes } from "../pages";
import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage className="p-5" />} />

        <Route path="search" element={<SearchHeroes />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
