"use client";

import styled from "styled-components";
import { t } from "../tokens";

interface Props {
  number: string;
  en: string;
  ko: string;
  tag: string;
  sub?: string;
}

export default function SectionHeading({ number, en, ko, tag, sub }: Props) {
  return (
    <Heading>
      <Num>{number}</Num>
      <Titles>
        <En>{en}</En>
        <KoRow>
          <Ko>{ko}</Ko>
          {sub && <SideInfo>{sub}</SideInfo>}
        </KoRow>
      </Titles>
      <Tag>{tag}</Tag>
    </Heading>
  );
}

const Heading = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  border-bottom: 6px solid ${t.ink};
  padding-bottom: 13px;
  margin-bottom: 18px;
`;
const Num = styled.span`
  font-size: 94px;
  font-weight: 900;
  line-height: 0.7;
  color: ${t.accent};
`;
const Titles = styled.div`
  flex: 1;
`;
const En = styled.div`
  font-size: 21px;
  letter-spacing: 0.3em;
  color: ${t.sub};
  font-weight: 700;
  margin-bottom: 3px;
`;
const KoRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 24px;
  flex-wrap: wrap;
`;
const Ko = styled.h2`
  font-size: 64px;
  font-weight: 900;
  margin: 0;
  line-height: 0.92;
`;
const SideInfo = styled.span`
  font-size: 33px;
  color: ${t.ink};
  font-weight: 700;
`;
const Tag = styled.span`
  font-size: 29px;
  color: ${t.sub};
  font-weight: 600;
  padding-bottom: 5px;
`;
