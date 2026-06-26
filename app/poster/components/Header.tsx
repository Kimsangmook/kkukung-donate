"use client";

import styled from "styled-components";
import { t } from "../tokens";

export default function Header() {
  return (
    <Wrap>
      <Logo src="/images/img02.png" alt="KKACùng 2026 in Vietnam" />
      <FlagBlock>
        <Flag src="/images/img01.png" alt="베트남 국기" />
        <FlagText>
          <Country>VIETNAM</Country>
          <CountrySub>베트남 · Việt Nam</CountrySub>
        </FlagText>
      </FlagBlock>
      <Verse>
        <VerseLabel>주제 말씀 · ROMANS 12:15</VerseLabel>
        <VerseText>
          “즐거워하는 자들과 함께 즐거워하고
          <br />
          우는 자들과 함께 울라”
        </VerseText>
      </Verse>
    </Wrap>
  );
}

const Wrap = styled.header`
  display: flex;
  gap: 40px;
  align-items: center;
`;
const Logo = styled.img`
  width: 588px;
  max-width: 44%;
  height: auto;
  display: block;
  flex: 0 0 auto;
`;
const FlagBlock = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 0 36px;
  border-left: 1px solid ${t.line};
`;
const Flag = styled.img`
  width: 132px;
  height: auto;
  border: 1px solid ${t.line};
  display: block;
`;
const FlagText = styled.div`
  text-align: center;
`;
const Country = styled.div`
  font-size: 29px;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.05;
`;
const CountrySub = styled.div`
  font-size: 19px;
  color: ${t.sub};
  font-weight: 600;
`;
const Verse = styled.div`
  flex: 1;
  border-left: 5px solid ${t.accent};
  padding-left: 32px;
`;
const VerseLabel = styled.div`
  font-size: 21px;
  letter-spacing: 0.2em;
  color: ${t.accent};
  font-weight: 800;
  margin-bottom: 11px;
`;
const VerseText = styled.p`
  font-size: 32px;
  line-height: 1.4;
  margin: 0;
  font-weight: 700;
  color: ${t.ink};
  word-break: keep-all;
`;
