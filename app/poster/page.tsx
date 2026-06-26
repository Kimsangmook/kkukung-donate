"use client";

import styled, { createGlobalStyle } from "styled-components";
import { t } from "./tokens";
import PosterFonts from "./PosterFonts";
import Header from "./components/Header";
import MeaningBand from "./components/MeaningBand";
import CountrySection from "./components/CountrySection";
import CenterSection from "./components/CenterSection";
import MinistrySection from "./components/MinistrySection";

const PrintGlobal = createGlobalStyle`
  * { box-sizing: border-box; }
  @page { size: A1 portrait; margin: 0; }
  @media print {
    html, body { margin: 0; background: ${t.paper} !important; }
  }
`;

export default function PosterPage() {
  return (
    <>
      <PosterFonts />
      <PrintGlobal />
      <Sheet>
        <Header />
        <MeaningBand />
        <CountrySection />
        <CenterSection />
        <MinistrySection />
      </Sheet>
    </>
  );
}

const Sheet = styled.div`
  width: ${t.W}px;
  min-height: ${t.H}px;
  background: ${t.paper};
  color: ${t.ink};
  font-family: 'Noto Sans KR', sans-serif;
  padding: 38px 60px;
  display: flex;
  flex-direction: column;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
`;
