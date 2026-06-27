"use client";

import styled from "styled-components";
import { t } from "../tokens";

const VALUES = ["방향", "공정", "정직", "투명", "책임"];

export default function IdentityBand() {
  return (
    <Grid>
      <Dark>
        <DarkTitle>FRIENDS OF DALAT (FOD)</DarkTitle>
        <DarkText>장애인 분들을 섬기며 하나님의 사랑을 전하는 센터</DarkText>
      </Dark>
      <ValueCard>
        <CardLabel>핵심 가치</CardLabel>
        <Chips>
          {VALUES.map((v) => (
            <Chip key={v}>{v}</Chip>
          ))}
        </Chips>
      </ValueCard>
      <SloganCard>
        <SloganLeft>
          <CardLabel $tight>사역 표어</CardLabel>
          <Slogan>삶으로 증명하라</Slogan>
        </SloganLeft>
        <RegionBlock>
          <CardLabel $tight>활동 지역</CardLabel>
          <Region>
            하노이 &amp; 럼동성
            <br />
            <RegionSub>(달랏 중심)</RegionSub>
          </Region>
        </RegionBlock>
      </SloganCard>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.45fr 1fr 1.15fr;
  gap: 20px;
  align-items: stretch;
`;
const Dark = styled.div`
  background: ${t.ink};
  color: ${t.paper};
  border-radius: ${t.radius};
  padding: 18px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DarkTitle = styled.div`
  font-size: 23px;
  font-weight: 800;
  color: ${t.accent};
  margin-bottom: 7px;
`;
const DarkText = styled.p`
  margin: 0;
  font-size: 32px;
  line-height: 1.4;
  font-weight: 600;
  word-break: keep-all;
`;
const Card = styled.div`
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
`;
const ValueCard = styled(Card)`
  padding: 20px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CardLabel = styled.div<{ $tight?: boolean }>`
  font-size: 20px;
  color: ${t.sub};
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: ${({ $tight }) => ($tight ? "4px" : "12px")};
`;
const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Chip = styled.span`
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(225, 43, 37, 0.08);
  color: ${t.accent};
  font-size: 23px;
  font-weight: 700;
`;
const SloganCard = styled(Card)`
  padding: 20px 28px;
  display: flex;
  align-items: center;
  gap: 22px;
`;
const SloganLeft = styled.div`
  flex: 1;
`;
const Slogan = styled.div`
  font-family: 'Nanum Pen Script';
  font-size: 50px;
  line-height: 0.9;
  color: ${t.accent};
`;
const RegionBlock = styled.div`
  border-left: 1px solid ${t.line};
  padding-left: 22px;
  flex: 0 0 auto;
`;
const Region = styled.div`
  font-size: 25px;
  font-weight: 700;
  line-height: 1.3;
`;
const RegionSub = styled.span`
  font-size: 18px;
  color: ${t.sub};
  font-weight: 500;
`;
