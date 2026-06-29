"use client";

import QrSheet from "../QrSheet";

// A3 = A4를 √2배(약 1.414배) 키운 크기 (같은 비율)
export default function QrA3Page() {
  return <QrSheet pageSize="A3" scale={1.4142135624} />;
}
