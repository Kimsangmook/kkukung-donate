"use client";

import styled from "styled-components";
import { t } from "../tokens";
import SectionHeading from "./SectionHeading";
import PhotoFigure from "./PhotoFigure";
import FactsCard from "./FactsCard";
import ReligionDonut from "./ReligionDonut";

export default function CountrySection() {
  return (
    <Section>
      <SectionHeading number="01" en="COUNTRY" ko="나라 소개" tag="다민족 · 민간신앙의 땅" />
      <Row>
        <FactsCard />
        <Photos>
          <PhotoFigure src="/images/img06.png" caption="민간신앙 · 조상 숭배" aspect="3 / 2" maxHeight="238px" />
          <PhotoFigure src="/images/img07.png" caption="불교" aspect="3 / 2" maxHeight="238px" />
          <PhotoFigure src="/images/img05.png" caption="종교 분포 지도" aspect="3 / 2" maxHeight="238px" />
          <PhotoFigure src="/images/img03.png" caption="베트남" aspect="3 / 2" maxHeight="238px" />
        </Photos>
      </Row>
      <ReligionDonut />
    </Section>
  );
}

const Section = styled.section`
  margin-top: 20px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 0.82fr 1.85fr;
  gap: 22px;
  align-items: stretch;
`;
const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  align-content: center;
  align-items: center;
`;
