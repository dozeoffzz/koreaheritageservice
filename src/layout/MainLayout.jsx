import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const LayOut = styled.div`
  padding: 0 200px;

  @media (max-width: 1728px) {
    padding: 0 100px;
  }
`;

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Banner />
      <LayOut>
        <Outlet />
      </LayOut>
      <Footer />
    </div>
  );
}
