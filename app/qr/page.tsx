"use client";

import styled, { createGlobalStyle } from "styled-components";

const PrintGlobal = createGlobalStyle`
  @page { size: A4 portrait; margin: 0; }
  @media print {
    html, body { background: #f6efe2 !important; }
  }
`;

export default function QrPrintPage() {
  return (
    <>
      <PrintGlobal />
      <Sheet>
        <Title>까꿍</Title>

        <Verse>
          &quot;즐거워하는 자들과 함께 즐거워하고<br />우는 자들과 함께 울라&quot;
          <Ref>— 로마서 12:15</Ref>
        </Verse>

        <QrBox>
          <img src="/qr.png" alt="까꿍 후원 QR" width={520} height={520} />
        </QrBox>

        <Scan>
          휴대폰 카메라로 <b>QR을 스캔</b>하면 후원 페이지가 열립니다
          <ScanSub>토스 · 카카오뱅크 · 국민 등 원하는 은행으로 송금할 수 있어요</ScanSub>
        </Scan>

        <Acct>
          <AcctLeft>
            <AcctLabel>후원 계좌 (안심계좌)</AcctLabel>
            <AcctBank>카카오뱅크</AcctBank>
          </AcctLeft>
          <AcctRight>
            <AcctNum>7942-33-53449</AcctNum>
            <AcctHolder>예금주 : 까꿍</AcctHolder>
          </AcctRight>
        </Acct>
      </Sheet>
    </>
  );
}

const Sheet = styled.div`
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 16mm;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% -10%, #fbf6ec 0%, #f6efe2 55%, #efe5d2 100%);
  color: #2f3a32;
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
`;
const Title = styled.div`
  font-size: 60pt;
  font-weight: 900;
  color: #2c4636;
  letter-spacing: 0.04em;
  line-height: 1;
`;
const Verse = styled.div`
  margin-top: 9mm;
  width: 170mm;
  background: #fff;
  border: 1px solid #e6d8bd;
  border-radius: 6mm;
  padding: 9mm 10mm;
  text-align: center;
  font-size: 19pt;
  line-height: 1.6;
  color: #3a4a3c;
  font-weight: 600;
  word-break: keep-all;
  box-shadow: 0 6px 18px rgba(120, 95, 40, 0.08);
`;
const Ref = styled.div`
  margin-top: 5mm;
  font-size: 13pt;
  color: #b08746;
  font-weight: 700;
`;
const QrBox = styled.div`
  margin-top: 9mm;
  background: #fff;
  border-radius: 7mm;
  padding: 8mm;
  border: 1px solid #ece0c8;
  box-shadow: 0 8px 22px rgba(60, 80, 55, 0.12);

  img {
    display: block;
    width: 74mm;
    height: 74mm;
  }
`;
const Scan = styled.div`
  margin-top: 5mm;
  font-size: 16pt;
  font-weight: 700;
  color: #2c4636;
  text-align: center;

  b {
    color: #b08746;
  }
`;
const ScanSub = styled.div`
  margin-top: 2mm;
  font-size: 12pt;
  color: #6b7468;
  font-weight: 600;
`;
const Acct = styled.div`
  margin-top: 8mm;
  width: 170mm;
  background: #2c4636;
  color: #f6efe2;
  border-radius: 6mm;
  padding: 7mm 8mm;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AcctLeft = styled.div``;
const AcctRight = styled.div`
  text-align: right;
`;
const AcctLabel = styled.div`
  font-size: 13pt;
  color: #cdb98a;
  font-weight: 700;
  letter-spacing: 0.05em;
`;
const AcctBank = styled.div`
  font-size: 14pt;
  font-weight: 600;
  margin-top: 1mm;
  opacity: 0.9;
`;
const AcctNum = styled.div`
  font-size: 27pt;
  font-weight: 900;
  letter-spacing: 0.03em;
`;
const AcctHolder = styled.div`
  font-size: 13pt;
  margin-top: 1mm;
  opacity: 0.85;
`;
