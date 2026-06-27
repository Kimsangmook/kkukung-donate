"use client";

import styled from "styled-components";
import { t } from "../tokens";
import { facts } from "../data";

export default function FactsCard() {
  return (
    <Card>
      {facts.map((f) => (
        <Block key={f.no}>
          <H3>
            <No>{f.no}</No> {f.title}
          </H3>
          {f.body && <P>{f.body}</P>}
          {f.bar && (
            <>
              <P style={{ marginBottom: "9px" }}>
                정부 인정 <b>54개 민족</b>의 다민족 국가.
              </P>
              <Bar>
                <BarMain $w={f.bar.mainPct}>{f.bar.mainLabel}</BarMain>
                <BarRest $w={f.bar.restPct}>{f.bar.restLabel}</BarRest>
              </Bar>
            </>
          )}
        </Block>
      ))}
    </Card>
  );
}

const Card = styled.div`
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
  padding: 22px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
`;
const Block = styled.div``;
const H3 = styled.h3`
  font-size: 29px;
  font-weight: 800;
  margin: 0 0 5px;
`;
const No = styled.span`
  color: ${t.accent};
`;
const P = styled.p`
  font-size: 25px;
  line-height: 1.45;
  color: ${t.body};
  margin: 0;
  word-break: keep-all;
`;
const Bar = styled.div`
  display: flex;
  height: 32px;
  border-radius: 7px;
  overflow: hidden;
  font-size: 17px;
  font-weight: 700;
`;
const BarMain = styled.div<{ $w: number }>`
  width: ${({ $w }) => $w}%;
  background: ${t.accent};
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 12px;
`;
const BarRest = styled.div<{ $w: number }>`
  width: ${({ $w }) => $w}%;
  background: ${t.sand};
  color: ${t.body};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
