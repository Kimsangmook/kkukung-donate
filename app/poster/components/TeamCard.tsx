"use client";

import styled from "styled-components";
import { t } from "../tokens";
import type { Team } from "../data";

const MARKS = ["①", "②", "③", "④", "⑤"];

export default function TeamCard({ team }: { team: Team }) {
  return (
    <Card>
      <Head>
        <No>{team.no}</No>
        <Name>{team.name}</Name>
      </Head>
      <Pledge>{team.pledge}</Pledge>
      <Photos>
        {team.imgs.map((src) => (
          <Frame key={src}>
            <Img src={src} alt="" />
          </Frame>
        ))}
      </Photos>
      <List>
        {team.activities.map((a, i) => (
          <Item key={a}>
            <Mark>{MARKS[i]}</Mark>
            {a}
          </Item>
        ))}
      </List>
      <Members>
        <b style={{ color: t.ink }}>섬김 인원</b>
        <br />
        {team.members}
      </Members>
    </Card>
  );
}

const Card = styled.div`
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
const Head = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;
const No = styled.span`
  font-size: 30px;
  font-weight: 900;
  color: ${t.accent};
  line-height: 1;
`;
const Name = styled.h3`
  margin: 0;
  font-size: 26px;
  font-weight: 900;
`;
const Pledge = styled.div`
  font-family: 'Nanum Pen Script';
  font-size: 26px;
  color: ${t.accent};
  line-height: 1.05;
`;
const Photos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
`;
const Frame = styled.div`
  border-radius: ${t.radius};
  overflow: hidden;
  background: ${t.line};
  aspect-ratio: 21 / 15;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 20px;
  line-height: 1.35;
  color: ${t.body};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Item = styled.li`
  display: flex;
  gap: 9px;
  word-break: keep-all;
`;
const Mark = styled.span`
  color: ${t.accent};
  font-weight: 800;
`;
const Members = styled.div`
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid #eee7da;
  font-size: 17px;
  color: ${t.sub};
  line-height: 1.4;
`;
