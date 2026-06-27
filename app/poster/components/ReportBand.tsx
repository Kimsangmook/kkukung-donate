"use client";

import styled from "styled-components";
import { t } from "../tokens";
import { reportStats } from "../data";

export default function ReportBand() {
  return (
    <Band>
      <Title>
        2024년도
        <br />
        FOD 연간보고서
      </Title>
      <Stats>
        {reportStats.map((s) => (
          <Stat key={s.label} $divider={s.divider}>
            <StatLabel>{s.label}</StatLabel>
            <StatRow>
              <Big>
                {s.value}
                <Unit>{s.unit}</Unit>
              </Big>
              <Achieve>{s.achieve}</Achieve>
            </StatRow>
          </Stat>
        ))}
      </Stats>
    </Band>
  );
}

const Band = styled.div`
  margin-top: 14px;
  background: rgba(225, 43, 37, 0.06);
  border: 1px solid rgba(225, 43, 37, 0.18);
  border-radius: ${t.radius};
  padding: 15px 36px;
  display: flex;
  align-items: center;
  gap: 34px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25;
  flex: 0 0 auto;
  padding-right: 34px;
  border-right: 1px solid rgba(225, 43, 37, 0.25);
`;
const Stats = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  text-align: center;
`;
const Stat = styled.div<{ $divider?: boolean }>`
  ${({ $divider }) =>
    $divider &&
    `border-left: 1px solid rgba(225,43,37,.2); border-right: 1px solid rgba(225,43,37,.2);`}
`;
const StatLabel = styled.div`
  font-size: 23px;
  color: ${t.body};
  margin-bottom: 5px;
`;
const StatRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 14px;
`;
const Big = styled.span`
  font-size: 52px;
  font-weight: 900;
  color: ${t.accent};
`;
const Unit = styled.span`
  font-size: 21px;
`;
const Achieve = styled.span`
  font-size: 29px;
  font-weight: 800;
`;
