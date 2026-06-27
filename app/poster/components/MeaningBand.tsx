"use client";

import styled from "styled-components";
import { t } from "../tokens";

export default function MeaningBand() {
  return (
    <Band>
      <Label>
        <Hand>까꿍!</Hand>
        <Of>의 의미</Of>
      </Label>
      <Text>
        함께라는 뜻의 <b>꿍(Cùng)</b>, 함께 하나 되어 베트남으로 나아갔을 때 하나님의
        일하심을 <Accent>까꿍!</Accent> 하고 보게 될 것이라는 믿음의 고백입니다. 보내신
        곳에서 함께 웃고 울며, 그들 안에서 하나님이 역사하심을 보길 소망합니다.
      </Text>
    </Band>
  );
}

const Band = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 32px;
  align-items: center;
  background: #ffffff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
  padding: 22px 36px;
`;
const Label = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding-right: 36px;
  border-right: 1px solid ${t.line};
`;
const Hand = styled.span`
  font-family: 'Nanum Pen Script';
  font-size: 82px;
  line-height: 0.8;
  color: ${t.accent};
`;
const Of = styled.span`
  font-size: 25px;
  color: ${t.sub};
  letter-spacing: 0.2em;
`;
const Text = styled.p`
  margin: 0;
  font-size: 35px;
  line-height: 1.5;
  color: ${t.body};
  word-break: keep-all;
`;
const Accent = styled.b`
  color: ${t.accent};
`;
