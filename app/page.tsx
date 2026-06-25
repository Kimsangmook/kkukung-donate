"use client";

import { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

const ACCOUNT = "79423353449";
const ACCOUNT_DISP = "7942-33-53449";
const BANK_NAME = "카카오뱅크";
const CDN = "https://play-lh.googleusercontent.com/";

type Bank = { key: string; n: string; pkg: string; ios: string | null; icon: string };

// 앱이 바로 열리는 은행 (iOS 스킴 + Android intent)
const OPEN_BANKS: Bank[] = [
  { key: "toss", n: "토스", pkg: "viva.republica.toss", ios: "supertoss://", icon: CDN + "Wb1DQtVwfTWbHCq4ldVUDzGSeJmtAy2flAUavBHPkgbXtCh84E6Y-AIYBw9ZgPRsPkw=s96" },
  { key: "kakao", n: "카카오뱅크", pkg: "com.kakaobank.channel", ios: "kakaobank://", icon: CDN + "6Z_MeUWUyXUmnE57yjYNKQdGvYHk_P8akfoZn0JZNZvsHAqtYFm4bi90m568nYgnqA=s96" },
  { key: "kb", n: "국민", pkg: "com.kbstar.kbbank", ios: "kbbank://", icon: CDN + "K1rBzVJjq9qtSxC2vkWIsp3GPtPOCwLPf1aCJ0tL0TvWdNcAKQKhYwjPMY90XJwyW-E=s96" },
  { key: "woori", n: "우리", pkg: "com.wooribank.smart.npib", ios: "NewSmartPib://", icon: CDN + "X0F73sNd54RPhUJCMlRAINxhGKxw18jkBgw4E5F6dIs_7pL5Geg0xWt5taQwisw47ok=s96" },
];

// 아이폰에서 공개 스킴이 없는 은행 → 계좌번호 복사 후 앱에 붙여넣기
const COPY_BANKS: Bank[] = [
  { key: "shinhan", n: "신한", pkg: "com.shinhan.sbanking", ios: null, icon: CDN + "VoHoGvh399BRPls8rz-UpqshdPrZd04kEUTaTwy8bwP2iWBGUPElL0gf9EWDDOSVj7E_gUk3AlQDoFUpqXBwspY=s96" },
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

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [noteBank, setNoteBank] = useState<string | null>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function flashCopied() {
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1600);
  }
  function copyAcct() {
    copyText(ACCOUNT).then(flashCopied);
  }

  // 바로 열리는 은행
  function openBank(b: Bank) {
    copyText(ACCOUNT).then(flashCopied);
    if (b.key === "toss") {
      window.location.href =
        "supertoss://send?bank=" + encodeURIComponent(BANK_NAME) +
        "&accountNo=" + ACCOUNT + "&origin=qr";
      return;
    }
    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    if (isAndroid) {
      const fallback = "https://play.google.com/store/apps/details?id=" + b.pkg;
      window.location.href =
        "intent://#Intent;package=" + b.pkg +
        ";S.browser_fallback_url=" + encodeURIComponent(fallback) + ";end";
    } else if (isIOS && b.ios) {
      window.location.href = b.ios;
    }
  }

  // 복사 그룹: 계좌번호 복사 후 안내
  function copyForBank(b: Bank) {
    copyText(ACCOUNT).then(flashCopied);
    setNoteBank(b.n);
    const ua = navigator.userAgent || "";
    if (/Android/i.test(ua)) {
      // 안드로이드는 앱 실행도 함께 시도 (붙여넣기 안내는 그대로 노출)
      const fallback = "https://play.google.com/store/apps/details?id=" + b.pkg;
      window.location.href =
        "intent://#Intent;package=" + b.pkg +
        ";S.browser_fallback_url=" + encodeURIComponent(fallback) + ";end";
    }
  }

  return (
    <Wrap>
      <Title>까꿍 후원</Title>

      <Verse>
        &quot;즐거워하는 자들과 함께 즐거워하고<br />우는 자들과 함께 울라&quot;
        <Ref>— 로마서 12:15</Ref>
      </Verse>

      <Acct onClick={copyAcct} role="button" aria-label="계좌번호 복사">
        <AcctTop>
          <Label>후원 계좌</Label>
          <CopyBadge $done={copied}>
            {copied ? <CheckIcon /> : <ClipboardIcon />}
            <span>{copied ? "복사됨" : "복사"}</span>
          </CopyBadge>
        </AcctTop>
        <BankRow>카카오뱅크</BankRow>
        <Num>{ACCOUNT_DISP}</Num>
        <Holder>예금주 · 까꿍 (김상묵)</Holder>
      </Acct>

      <SectionT>앱으로 바로 송금</SectionT>
      <Banks>
        {OPEN_BANKS.map((b) => (
          <BankBtn key={b.key} onClick={() => openBank(b)}>
            <Logo src={b.icon} alt={b.n} width={44} height={44} loading="lazy" />
            <BName>{b.n}</BName>
          </BankBtn>
        ))}
      </Banks>

      <SectionT $muted>
        그 외 은행은 계좌번호 복사 후 앱에 붙여넣기
      </SectionT>
      <Banks>
        {COPY_BANKS.map((b) => (
          <BankBtn key={b.key} $copy onClick={() => copyForBank(b)}>
            <LogoWrap>
              <Logo src={b.icon} alt={b.n} width={44} height={44} loading="lazy" />
              <CopyDot aria-hidden>
                <ClipboardIcon />
              </CopyDot>
            </LogoWrap>
            <BName>{b.n}</BName>
          </BankBtn>
        ))}
      </Banks>

      {noteBank && (
        <Note>
          <NoteTitle>{noteBank} 계좌번호 복사됨</NoteTitle>
          <NoteBody>
            <b>{noteBank} 앱</b>을 열고 &quot;이체/송금&quot; 화면에 붙여넣으세요.
          </NoteBody>
          <ReCopy
            onClick={(e) => {
              e.stopPropagation();
              copyAcct();
            }}
          >
            {copied ? "복사됨 ✓" : "다시 복사"}
          </ReCopy>
        </Note>
      )}

      <Foot>계좌 비밀번호·인증정보는 일절 수집하지 않습니다.</Foot>
    </Wrap>
  );
}

/* ---------- styled-components ---------- */

const pop = keyframes`
  0% { opacity: 0; transform: translateY(-6px); box-shadow: 0 0 0 0 rgba(216,169,63,0.5); }
  60% { box-shadow: 0 0 0 9px rgba(216,169,63,0); }
  100% { opacity: 1; transform: translateY(0); box-shadow: 0 0 0 0 rgba(216,169,63,0); }
`;

const Wrap = styled.main`
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif;
  max-width: 420px;
  margin: 0 auto;
  padding: 18px 18px 22px;
  color: #2c4636;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.03em;
  margin: 0 0 12px;
`;
const Verse = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.55;
  color: #3a4a3c;
  background: #fffdf8;
  border: 1px solid #ece0c8;
  border-radius: 14px;
  padding: 11px 14px;
  margin-bottom: 14px;
  font-weight: 600;
  word-break: keep-all;
`;
const Ref = styled.span`
  display: block;
  margin-top: 6px;
  color: #b08746;
  font-size: 11px;
  font-weight: 700;
`;
const Acct = styled.div`
  background: #2c4636;
  color: #f6efe2;
  border-radius: 18px;
  padding: 15px 18px 17px;
  margin-bottom: 16px;
  box-shadow: 0 10px 24px rgba(40, 64, 50, 0.2);
  cursor: pointer;
  user-select: none;
  transition: transform 0.12s ease;
  &:active {
    transform: scale(0.992);
  }
`;
const AcctTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.div`
  font-size: 12px;
  color: #cdb98a;
  font-weight: 700;
  letter-spacing: 0.06em;
`;
const CopyBadge = styled.div<{ $done: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 800;
  padding: 5px 11px;
  border-radius: 999px;
  color: ${(p) => (p.$done ? "#1f3a2e" : "#f6efe2")};
  background: ${(p) => (p.$done ? "#cde8c4" : "rgba(246, 239, 226, 0.14)")};
  border: 1px solid ${(p) => (p.$done ? "transparent" : "rgba(246, 239, 226, 0.28)")};
  transition: all 0.18s ease;
`;
const BankRow = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-top: 12px;
  opacity: 0.9;
`;
const Num = styled.div`
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.01em;
  margin-top: 2px;
`;
const Holder = styled.div`
  font-size: 12px;
  margin-top: 8px;
  opacity: 0.78;
`;
const SectionT = styled.div<{ $muted?: boolean }>`
  font-size: ${(p) => (p.$muted ? "12px" : "13px")};
  color: ${(p) => (p.$muted ? "#9a9587" : "#6b7468")};
  font-weight: 700;
  text-align: center;
  margin: 16px 0 9px;
`;
const Banks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 9px;
`;
const BankBtn = styled.button<{ $copy?: boolean }>`
  background: ${(p) => (p.$copy ? "#fbf7ef" : "#fffdf8")};
  border: 1px solid #ece0c8;
  border-radius: 15px;
  padding: 11px 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transition: transform 0.1s ease;
  &:active {
    transform: scale(0.95);
    background: #faf4e8;
  }
`;
const LogoWrap = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
`;
const Logo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
`;
const CopyDot = styled.span`
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: #2c4636;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #fbf7ef;
  svg {
    width: 11px;
    height: 11px;
  }
`;
const BName = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #2c4636;
`;
const Note = styled.div`
  margin-top: 14px;
  background: #fff7e6;
  border: 2px solid #d8a93f;
  border-radius: 15px;
  padding: 13px 16px;
  text-align: center;
  animation: ${pop} 0.35s ease-out 1;
`;
const NoteTitle = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #a9781f;
`;
const NoteBody = styled.div`
  margin-top: 5px;
  font-size: 12.5px;
  line-height: 1.55;
  color: #6b7468;
  word-break: keep-all;
  b {
    color: #2c4636;
  }
`;
const ReCopy = styled.button`
  margin-top: 11px;
  border: none;
  background: #2c4636;
  color: #fff;
  font-weight: 800;
  font-size: 13px;
  padding: 9px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  &:active {
    filter: brightness(0.93);
  }
`;
const Foot = styled.div`
  margin-top: 16px;
  font-size: 11px;
  color: #9a9587;
  text-align: center;
  line-height: 1.5;
  word-break: keep-all;
`;
