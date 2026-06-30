import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}
