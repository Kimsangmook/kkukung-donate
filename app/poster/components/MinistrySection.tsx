"use client";

import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import TeamCard from "./TeamCard";
import { teams } from "../data";

export default function MinistrySection() {
  return (
    <Section>
      <SectionHeading
        number="03"
        en="MINISTRY"
        ko="사역 소개"
        tag="장애 영유아 섬김 · 4팀"
        sub="담당 교역자 정진혁 목사님 · 팀장 김지수"
      />
      <Teams>
        {teams.map((team) => (
          <TeamCard key={team.no} team={team} />
        ))}
      </Teams>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 10px;
`;
const Teams = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;
