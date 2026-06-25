import type { Metadata, Viewport } from "next";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

export const metadata: Metadata = {
  title: "까꿍 후원 · 계좌 송금",
  description: "까꿍 후원 계좌입니다. 계좌번호를 복사해 본인 은행 앱에서 송금하세요.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#2c4636",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
