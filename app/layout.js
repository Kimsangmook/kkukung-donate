export const metadata = {
  title: "까꿍 후원 · 계좌 송금",
  description: "까꿍 후원 계좌입니다. 계좌번호를 복사해 본인 은행 앱에서 송금하세요.",
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: "#2c4636",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
