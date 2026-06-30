import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayOut = styled.div`
  padding: 0 200px;
`;

export default function MainLayout() {
  return (
    <div>
      <Header />
      <LayOut>
        <Outlet />
      </LayOut>
      <Footer />
    </div>
  );
}
