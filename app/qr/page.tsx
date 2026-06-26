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
        <Title>까꿍 후원</Title>
        <VerseLine>
          &quot;즐거워하는 자들과 함께 즐거워하고<br />우는 자들과 함께 울라&quot;
          <Ref>— 로마서 12:15</Ref>
        </VerseLine>

        <QrCard>
          <QrLabel>카카오페이로 후원하기</QrLabel>
          <KakaoImg src="/kakaopay.png" alt="카카오페이 입금 QR" />
          <QrSub>카카오톡 ‘코드스캔’ 또는 카메라로 스캔하세요</QrSub>
        </QrCard>

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
  padding: 20mm 16mm;
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
  font-size: 54pt;
  font-weight: 900;
  color: #2c4636;
  letter-spacing: 0.04em;
  line-height: 1;
`;
const VerseLine = styled.div`
  margin-top: 7mm;
  font-size: 17pt;
  font-weight: 600;
  color: #3a4a3c;
  text-align: center;
  line-height: 1.55;
  word-break: keep-all;
`;
const Ref = styled.div`
  margin-top: 4mm;
  font-size: 13pt;
  color: #b08746;
  font-weight: 700;
`;
const QrCard = styled.div`
  margin-top: 9mm;
  background: #fff;
  border: 1px solid #e6d8bd;
  border-radius: 8mm;
  padding: 10mm 10mm 9mm;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 22px rgba(120, 95, 40, 0.1);
`;
const QrLabel = styled.div`
  font-size: 19pt;
  font-weight: 800;
  color: #2c4636;
`;
const KakaoImg = styled.img`
  margin-top: 6mm;
  width: 78mm;
  height: auto;
  border-radius: 4mm;
`;
const QrSub = styled.div`
  margin-top: 7mm;
  font-size: 13pt;
  font-weight: 600;
  color: #6b7468;
  text-align: center;
`;
const Acct = styled.div`
  margin-top: 9mm;
  width: 100%;
  max-width: 178mm;
  background: #2c4636;
  color: #f6efe2;
  border-radius: 6mm;
  padding: 7mm 9mm;
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
