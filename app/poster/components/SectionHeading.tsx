"use client";

import styled from "styled-components";
import { t } from "../tokens";

interface Props {
  number: string;
  en: string;
  ko: string;
  tag: string;
}

export default function SectionHeading({ number, en, ko, tag }: Props) {
  return (
    <Heading>
      <Num>{number}</Num>
      <Titles>
        <En>{en}</En>
        <Ko>{ko}</Ko>
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
  padding-bottom: 16px;
  margin-bottom: 30px;
`;
const Num = styled.span`
  font-size: 88px;
  font-weight: 900;
  line-height: 0.7;
  color: ${t.accent};
`;
const Titles = styled.div`
  flex: 1;
`;
const En = styled.div`
  font-size: 19px;
  letter-spacing: 0.3em;
  color: ${t.sub};
  font-weight: 700;
  margin-bottom: 3px;
`;
const Ko = styled.h2`
  font-size: 58px;
  font-weight: 900;
  margin: 0;
  line-height: 0.92;
`;
const Tag = styled.span`
  font-size: 27px;
  color: ${t.sub};
  font-weight: 600;
  padding-bottom: 5px;
`;
