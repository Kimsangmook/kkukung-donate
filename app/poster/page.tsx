"use client";

import styled, { createGlobalStyle } from "styled-components";
import { t } from "./tokens";
import PosterFonts from "./PosterFonts";
import Header from "./components/Header";
import MeaningBand from "./components/MeaningBand";
import CountrySection from "./components/CountrySection";
import CenterSection from "./components/CenterSection";
import MinistrySection from "./components/MinistrySection";

// A0 = A1을 √2배(약 1.414배) 키운 크기 (같은 비율). A1로 되돌리려면
// PAGE_SIZE를 "A1", SCALE을 1 로 바꾸면 됩니다.
const PAGE_SIZE = "A0";
const SCALE = 1.4142135624;

const PrintGlobal = createGlobalStyle`
  * { box-sizing: border-box; }
  @page { size: ${PAGE_SIZE} portrait; margin: 0; }
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
  zoom: ${SCALE};
  background: ${t.paper};
  color: ${t.ink};
  font-family: 'Noto Sans KR', sans-serif;
  padding: 38px 60px;
  display: flex;
  flex-direction: column;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
`;
