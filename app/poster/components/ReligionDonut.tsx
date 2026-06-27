"use client";

import styled from "styled-components";
import { t } from "../tokens";
import { religions } from "../data";

export default function ReligionDonut() {
  return (
    <Band>
      <Donut>
        <Hole>
          <HolePct>86%</HolePct>
        </Hole>
      </Donut>
      <LegendBlock>
        <LegendTitle>
          종교 비율 <Year>· 2019</Year>
        </LegendTitle>
        <LegendGrid>
          {religions.map((r) => (
            <LegendItem key={r.label}>
              <Swatch $c={r.color} />
              {r.label} <Val>{r.value}</Val>
            </LegendItem>
          ))}
        </LegendGrid>
      </LegendBlock>
      <Emphasis>
        <Hand>
          복음이
          <br />
          필요한 땅
        </Hand>
        <EmphasisText>
          베트남 인구의 <BigPct>86%</BigPct>가 민간신앙·무종교이며,{" "}
          <b>개신교는 단 1%</b>입니다.
        </EmphasisText>
      </Emphasis>
    </Band>
  );
}

const Band = styled.div`
  margin-top: 16px;
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
  padding: 20px 40px;
  display: flex;
  align-items: center;
  gap: 44px;
`;
const Donut = styled.div`
  position: relative;
  width: 214px;
  height: 214px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: conic-gradient(
    ${t.sand} 0 86.32%,
    ${t.accent} 86.32% 91.11%,
    #8a1713 91.11% 97.21%,
    #e79a95 97.21% 98.23%,
    #c0554f 98.23% 99.23%,
    #6e120f 99.23% 99.81%,
    #9c9384 99.81% 100%
  );
`;
const Hole = styled.div`
  position: absolute;
  inset: 55px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HolePct = styled.span`
  font-size: 42px;
  font-weight: 900;
  color: ${t.ink};
`;
const LegendBlock = styled.div`
  flex: 0 0 auto;
`;
const LegendTitle = styled.div`
  font-size: 22px;
  color: ${t.sub};
  font-weight: 700;
  margin-bottom: 13px;
`;
const Year = styled.span`
  color: #a79e8e;
  font-weight: 500;
`;
const LegendGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 11px 36px;
  font-size: 23px;
  color: ${t.body};
`;
const LegendItem = styled.span`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const Swatch = styled.span<{ $c: string }>`
  width: 15px;
  height: 15px;
  border-radius: 4px;
  background: ${({ $c }) => $c};
`;
const Val = styled.b`
  margin-left: auto;
`;
const Emphasis = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 24px;
  padding-left: 40px;
  border-left: 1px solid ${t.line};
`;
const Hand = styled.span`
  font-family: 'Nanum Pen Script';
  font-size: 60px;
  color: ${t.accent};
  line-height: 0.9;
  flex: 0 0 auto;
`;
const EmphasisText = styled.p`
  margin: 0;
  font-size: 38px;
  line-height: 1.45;
  color: ${t.body};
  font-weight: 600;
  word-break: keep-all;
`;
const BigPct = styled.b`
  color: ${t.accent};
  font-size: 44px;
`;
