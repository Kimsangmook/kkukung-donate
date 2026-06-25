"use client";

import { useState, useRef } from "react";
import styled from "styled-components";

const ACCOUNT = "79423353449";
const ACCOUNT_DISP = "7942-33-53449";
const BANK_NAME = "카카오뱅크";
const CDN = "https://play-lh.googleusercontent.com/";

type Bank = { key: string; n: string; pkg: string; ios: string | null; icon: string };

// 표시명 / 안드로이드 패키지명 / iOS 스킴(있으면) / 공식 앱 아이콘
const BANKS: Bank[] = [
  { key: "toss", n: "토스", pkg: "viva.republica.toss", ios: "supertoss://", icon: CDN + "Wb1DQtVwfTWbHCq4ldVUDzGSeJmtAy2flAUavBHPkgbXtCh84E6Y-AIYBw9ZgPRsPkw=s96" },
  { key: "kakao", n: "카카오뱅크", pkg: "com.kakaobank.channel", ios: "kakaobank://", icon: CDN + "6Z_MeUWUyXUmnE57yjYNKQdGvYHk_P8akfoZn0JZNZvsHAqtYFm4bi90m568nYgnqA=s96" },
  { key: "kb", n: "국민", pkg: "com.kbstar.kbbank", ios: "kbbank://", icon: CDN + "K1rBzVJjq9qtSxC2vkWIsp3GPtPOCwLPf1aCJ0tL0TvWdNcAKQKhYwjPMY90XJwyW-E=s96" },
  { key: "shinhan", n: "신한", pkg: "com.shinhan.sbanking", ios: null, icon: CDN + "s34uZDYvN_qe-tioQoDgdLGOq3y15vC2oSFhhhO60yVe1QVBfINgVCpbmrm_UoQSLMg=s96" },
  { key: "woori", n: "우리", pkg: "com.wooribank.smart.npib", ios: "NewSmartPib://", icon: CDN + "X0F73sNd54RPhUJCMlRAINxhGKxw18jkBgw4E5F6dIs_7pL5Geg0xWt5taQwisw47ok=s96" },
  { key: "hana", n: "하나", pkg: "com.hanabank.oqf", ios: null, icon: CDN + "l_ODfXz-4ixineb8vbQOXADRl80JoaogbXrEyf3ZPzsACiQs5_6al17W_uyHDUt6XkhGniYRcfFr_q0GLVrtoA=s96" },
  { key: "nh", n: "농협", pkg: "nh.smart.banking", ios: null, icon: CDN + "sU8NA10pFssrPOUO6Yl6dtN7QwAVpv7OQhvU4kxG-DaTo4a53fVO1nXAJZ2TQNjpNipe_JM0qnPXO8aZAtDHmg=s96" },
  { key: "ibk", n: "기업", pkg: "com.ibk.android.ionebank", ios: null, icon: CDN + "gAgdaXwHs1kGaI2XiaREdyk4Ys5tEFrk0fYybkX_CanldHTzrERIDW3HzzLqKHUopbq_qTSkKdX6GgCKRAWj9g=s96" },
];

function fallbackCopy(text: string) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* noop */ }
  document.body.removeChild(ta);
}
function copyText(text: string): Promise<void> {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  fallbackCopy(text);
  return Promise.resolve();
}

export default function Home() {
  const [toast, setToast] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2600);
  }

  function copyAcct() {
    copyText(ACCOUNT).then(() => showToast("계좌번호가 복사됐어요 (" + ACCOUNT_DISP + ")"));
  }
  function openToss() {
    copyText(ACCOUNT);
    window.location.href =
      "supertoss://send?bank=" + encodeURIComponent(BANK_NAME) +
      "&accountNo=" + ACCOUNT + "&origin=qr";
  }
  function openBank(b: Bank) {
    copyText(ACCOUNT);
    if (b.key === "toss") { openToss(); return; }

    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
      const fallback = "https://play.google.com/store/apps/details?id=" + b.pkg;
      showToast("계좌번호 복사됨 · " + b.n + " 앱 여는 중…");
      window.location.href =
        "intent://#Intent;package=" + b.pkg +
        ";S.browser_fallback_url=" + encodeURIComponent(fallback) + ";end";
    } else if (isIOS) {
      if (b.ios) {
        showToast("계좌번호 복사됨 · " + b.n + " 앱 여는 중…");
        window.location.href = b.ios;
      } else {
        showToast("계좌번호 복사됨 · " + b.n + " 앱을 열어 붙여넣으세요");
      }
    } else {
      showToast("계좌번호가 복사됐어요 (" + ACCOUNT_DISP + ")");
      if (b.ios) window.location.href = b.ios;
    }
  }

  return (
    <Wrap>
      <Header>
        <Name>까꿍 후원</Name>
        <Tag>함께해 주셔서 감사합니다</Tag>
      </Header>

      <Verse>
        &quot;즐거워하는 자들과 함께 즐거워하고<br />우는 자들과 함께 울라&quot;
        <Ref>— 로마서 12:15</Ref>
      </Verse>

      <Acct>
        <Label>후원 계좌</Label>
        <BankName>카카오뱅크</BankName>
        <Num>{ACCOUNT_DISP}</Num>
        <Holder>예금주 : 까꿍 (김상묵)</Holder>
      </Acct>

      <BtnCopy onClick={copyAcct}>📋 계좌번호 복사하기</BtnCopy>
      <BtnToss onClick={openToss}>토스로 바로 송금</BtnToss>

      <SectionT>
        또는, 내가 쓰는 은행 앱으로 송금하기<br />(탭하면 계좌번호가 복사되고 앱이 열려요)
      </SectionT>

      <Banks>
        {BANKS.map((b) => (
          <BankBtn key={b.key} onClick={() => openBank(b)}>
            <Logo src={b.icon} alt={b.n} width={46} height={46} loading="lazy" />
            <BName>{b.n}</BName>
          </BankBtn>
        ))}
      </Banks>

      <Note>
        앱이 안 열렸나요? <b>계좌번호는 이미 복사됐어요.</b><br />
        본인 은행 앱을 열고 &quot;이체/송금&quot;에서 붙여넣으세요.
      </Note>

      <Foot>
        이 페이지는 계좌 비밀번호·인증정보를 일절 수집/저장하지 않습니다.<br />
        실제 송금은 본인 은행 앱에서 진행됩니다.
      </Foot>

      <Toast $show={!!toast}>{toast}</Toast>
    </Wrap>
  );
}

/* ---------- styled-components ---------- */

const Wrap = styled.main`
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif;
  max-width: 440px;
  margin: 0 auto;
  padding: 24px 18px 40px;
  color: #2c4636;
`;
const Header = styled.div`
  text-align: center;
  margin-bottom: 18px;
`;
const Name = styled.div`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 0.03em;
`;
const Tag = styled.div`
  margin-top: 6px;
  font-size: 14px;
  color: #6b7468;
  font-weight: 600;
`;
const Verse = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
  color: #3a4a3c;
  background: #fff;
  border: 1px solid #e6d8bd;
  border-radius: 14px;
  padding: 14px 16px;
  margin-bottom: 18px;
  font-weight: 600;
  word-break: keep-all;
`;
const Ref = styled.span`
  display: block;
  margin-top: 8px;
  color: #b08746;
  font-size: 12px;
  font-weight: 700;
`;
const Acct = styled.div`
  background: #2c4636;
  color: #f6efe2;
  border-radius: 18px;
  padding: 20px 18px;
  margin-bottom: 16px;
  box-shadow: 0 10px 24px rgba(44, 70, 54, 0.18);
`;
const Label = styled.div`
  font-size: 12px;
  color: #cdb98a;
  font-weight: 700;
  letter-spacing: 0.05em;
`;
const BankName = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 8px;
  opacity: 0.92;
`;
const Num = styled.div`
  font-size: 27px;
  font-weight: 900;
  letter-spacing: 0.02em;
  margin-top: 2px;
`;
const Holder = styled.div`
  font-size: 13px;
  margin-top: 8px;
  opacity: 0.8;
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 800;
  padding: 16px;
  margin-bottom: 10px;
  color: #fff;
  font-family: inherit;
`;
const BtnCopy = styled(Btn)`
  background: #b08746;
`;
const BtnToss = styled(Btn)`
  background: #0064ff;
`;
const SectionT = styled.div`
  font-size: 13px;
  color: #6b7468;
  font-weight: 700;
  text-align: center;
  margin: 18px 0 12px;
`;
const Banks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
const BankBtn = styled.button`
  background: #fff;
  border: 1px solid #e6d8bd;
  border-radius: 14px;
  padding: 12px 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  &:active {
    background: #faf4e8;
  }
`;
const Logo = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`;
const BName = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #2c4636;
`;
const Note = styled.div`
  margin-top: 18px;
  background: #fff;
  border: 1px solid #e6d8bd;
  border-radius: 14px;
  padding: 14px 16px;
  font-size: 13px;
  line-height: 1.6;
  color: #6b7468;
  text-align: center;
  b {
    color: #2c4636;
  }
`;
const Foot = styled.div`
  margin-top: 18px;
  font-size: 11px;
  color: #9a9587;
  text-align: center;
  line-height: 1.6;
`;
const Toast = styled.div<{ $show: boolean }>`
  position: fixed;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%) translateY(${(p) => (p.$show ? "0" : "20px")});
  background: #2c4636;
  color: #fff;
  padding: 13px 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  opacity: ${(p) => (p.$show ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.25s, transform 0.25s;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25);
  max-width: 90vw;
  text-align: center;
`;
