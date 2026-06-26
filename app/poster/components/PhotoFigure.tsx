"use client";

import styled from "styled-components";
import { t } from "../tokens";

interface Props {
  src: string;
  caption: React.ReactNode;
  /** if set, the frame uses a fixed aspect-ratio (e.g. "3 / 2"); otherwise it flexes to fill height */
  aspect?: string;
  /** fixed frame width (e.g. "114px") for small figures */
  width?: string;
  /** cap the frame height (e.g. "230px") so wide grid cells don't grow too tall */
  maxHeight?: string;
  /** center figure + caption (used for the small 이상/현실 figures) */
  center?: boolean;
}

export default function PhotoFigure({ src, caption, aspect, width, maxHeight, center }: Props) {
  return (
    <Figure $center={center}>
      <Frame $aspect={aspect} $width={width} $maxHeight={maxHeight} $flex={!aspect}>
        <Img src={src} alt="" />
      </Frame>
      <Caption $center={center}>{caption}</Caption>
    </Figure>
  );
}

const Figure = styled.figure<{ $center?: boolean }>`
  margin: 0;
  display: flex;
  flex-direction: column;
  ${({ $center }) => $center && "text-align: center;"}
`;
const Frame = styled.div<{
  $aspect?: string;
  $width?: string;
  $maxHeight?: string;
  $flex?: boolean;
}>`
  border-radius: ${t.radius};
  overflow: hidden;
  background: ${t.line};
  ${({ $flex }) => $flex && "flex: 1;"}
  ${({ $aspect }) => $aspect && `aspect-ratio: ${$aspect};`}
  ${({ $width }) => $width && `width: ${$width};`}
  ${({ $maxHeight }) => $maxHeight && `max-height: ${$maxHeight};`}
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
const Caption = styled.figcaption<{ $center?: boolean }>`
  margin-top: ${({ $center }) => ($center ? "6px" : "9px")};
  font-size: 19px;
  color: ${t.sub};
  font-weight: 500;
`;
