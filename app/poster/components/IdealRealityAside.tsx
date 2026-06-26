"use client";

import styled from "styled-components";
import { t } from "../tokens";
import PhotoFigure from "./PhotoFigure";

export default function IdealRealityAside() {
  return (
    <Aside>
      <Hand>
        미술팀의
        <br />
        이상과 현실
      </Hand>
      <Pair>
        <PhotoFigure
          src="/images/img29.png"
          caption={<Ideal>이상 (명품백)</Ideal>}
          width="138px"
          aspect="1 / 1"
          center
        />
        <Arrow>→</Arrow>
        <PhotoFigure
          src="/images/img14.png"
          caption={<Reality>현실 (손도장 가방)</Reality>}
          width="138px"
          aspect="1 / 1"
          center
        />
        <PhotoFigure
          src="/images/img26.png"
          caption={<RealitySub>실제 도안 스케치</RealitySub>}
          width="138px"
          aspect="1 / 1"
          center
        />
      </Pair>
      <Text>
        그래도 괜찮아요. 우리가 만드는 건 명품이 아니라 <Accent>아이들의 웃음</Accent>
        이니까요.
      </Text>
    </Aside>
  );
}

const Aside = styled.div`
  margin-top: 24px;
  background: #fff;
  border: 1px dashed ${t.accent};
  border-radius: ${t.radius};
  padding: 22px 34px;
  display: flex;
  align-items: center;
  gap: 34px;
`;
const Hand = styled.span`
  font-family: 'Nanum Pen Script';
  font-size: 40px;
  color: ${t.accent};
  line-height: 0.9;
  flex: 0 0 auto;
`;
const Pair = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Arrow = styled.span`
  font-size: 38px;
  color: #c9bca6;
`;
const Ideal = styled.span`
  font-size: 19px;
  font-weight: 800;
  color: ${t.ink};
`;
const Reality = styled.span`
  font-size: 19px;
  font-weight: 800;
  color: ${t.accent};
`;
const RealitySub = styled.span`
  font-size: 15px;
  color: ${t.sub};
  font-weight: 500;
`;
const Text = styled.p`
  flex: 1;
  margin: 0;
  font-size: 23px;
  line-height: 1.4;
  color: ${t.body};
  word-break: keep-all;
`;
const Accent = styled.b`
  color: ${t.accent};
`;
