"use client";

import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import PhotoFigure from "./PhotoFigure";
import IdentityBand from "./IdentityBand";
import MinistryCard from "./MinistryCard";
import ReportBand from "./ReportBand";
import { ministries } from "../data";

export default function CenterSection() {
  return (
    <Section>
      <SectionHeading number="02" en="CENTER" ko="센터 소개" tag="FRIENDS OF DALAT · FOD" />
      <IdentityBand />
      <Photos>
        <PhotoFigure src="/images/img04.png" caption="FOD 센터 교실" aspect="3 / 2" maxHeight="240px" />
        <PhotoFigure src="/images/img09.png" caption="사랑으로 섬김" aspect="3 / 2" maxHeight="240px" />
        <PhotoFigure src="/images/img13.png" caption="장애인 초콜릿 카페" aspect="3 / 2" maxHeight="240px" />
        <PhotoFigure src="/images/img10.png" caption="사랑의 집짓기" aspect="3 / 2" maxHeight="240px" />
        <PhotoFigure src="/images/img12.png" caption="현지 교회 · 모임" aspect="3 / 2" maxHeight="240px" />
        <PhotoFigure src="/images/img18.png" caption="팀과 함께" aspect="3 / 2" maxHeight="240px" />
      </Photos>
      <Ministries>
        {ministries.map((m) => (
          <MinistryCard key={m.no} item={m} />
        ))}
      </Ministries>
      <ReportBand />
    </Section>
  );
}

const Section = styled.section`
  margin-top: 20px;
`;
const Photos = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
`;
const Ministries = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
`;
