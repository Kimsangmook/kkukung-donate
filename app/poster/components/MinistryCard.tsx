"use client";

import styled from "styled-components";
import { t } from "../tokens";
import type { MinistryItem } from "../data";

export default function MinistryCard({ item }: { item: MinistryItem }) {
  return (
    <Card>
      <H4>
        <No>{item.no}</No> {item.title}
      </H4>
      <P>{item.desc}</P>
    </Card>
  );
}

const Card = styled.div`
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
  padding: 18px 26px;
  border-top: 6px solid ${t.accent};
`;
const H4 = styled.h4`
  margin: 0 0 7px;
  font-size: 26px;
  font-weight: 800;
`;
const No = styled.span`
  color: ${t.accent};
`;
const P = styled.p`
  margin: 0;
  font-size: 21px;
  line-height: 1.4;
  color: ${t.body};
  word-break: keep-all;
`;
