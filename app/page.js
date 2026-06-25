"use client";

import { useState, useRef } from "react";

const ACCOUNT = "79423353449";
const ACCOUNT_DISP = "7942-33-53449";
const BANK_NAME = "카카오뱅크";

const BANKS = [
  { n: "토스", c: "#0064FF", tc: "#ffffff", s: "T", url: "toss" },
  { n: "카카오뱅크", c: "#FEE500", tc: "#3c1e1e", s: "k", url: "kakaobank://" },
  { n: "국민", c: "#FFBC00", tc: "#3a2e00", s: "KB", url: "kbbank://" },
  { n: "신한", c: "#0046FF", tc: "#ffffff", s: "S", url: "smartshinhan://" },
  { n: "우리", c: "#0067AC", tc: "#ffffff", s: "W", url: "NewSmartPib://" },
  { n: "하나", c: "#008485", tc: "#ffffff", s: "H", url: "hanapush://" },
  { n: "농협", c: "#19A537", tc: "#ffffff", s: "N", url: "nhallonebank://" },
  { n: "기업", c: "#004C9C", tc: "#ffffff", s: "IBK", url: "ibksmartbanking://" },
];

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  fallbackCopy(text);
  return Promise.resolve();
}
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

export default function Page() {
  const [toast, setToast] = useState("");
  const timer = useRef(null);

  function showToast(msg) {
    setToast(msg);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2200);
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
  function openBank(b) {
    copyText(ACCOUNT).then(() => showToast("계좌번호 복사됨 · " + b.n + " 앱 여는 중…"));
    if (b.url === "toss") { openToss(); return; }
    setTimeout(() => { try { window.location.href = b.url; } catch (e) {} }, 250);
  }

  return (
    <main className="wrap">
      <div className="head">
        <div className="name">까꿍 후원</div>
        <div className="tag">함께해 주셔서 감사합니다</div>
      </div>

      <div className="verse">
        &quot;즐거워하는 자들과 함께 즐거워하고<br />우는 자들과 함께 울라&quot;
        <span className="ref">— 로마서 12:15</span>
      </div>

      <div className="acct">
        <div className="label">후원 계좌</div>
        <div className="bank">카카오뱅크</div>
        <div className="num">{ACCOUNT_DISP}</div>
        <div className="holder">예금주 : 까꿍 (김상묵)</div>
      </div>

      <button className="btn btn-copy" onClick={copyAcct}>📋 계좌번호 복사하기</button>
      <button className="btn btn-toss" onClick={openToss}>토스로 바로 송금</button>

      <div className="section-t">
        또는, 내가 쓰는 은행 앱으로 송금하기<br />(탭하면 계좌번호가 복사되고 앱이 열려요)
      </div>
      <div className="banks">
        {BANKS.map((b) => (
          <button key={b.n} className="bankbtn" onClick={() => openBank(b)}>
            <span className="logo" style={{ background: b.c, color: b.tc }}>{b.s}</span>
            <span className="bname">{b.n}</span>
          </button>
        ))}
      </div>

      <div className="note">
        앱이 안 열렸나요? <b>계좌번호는 이미 복사됐어요.</b><br />
        본인 은행 앱을 열고 &quot;이체/송금&quot;에서 붙여넣으세요.
      </div>

      <div className="foot">
        이 페이지는 계좌 비밀번호·인증정보를 일절 수집/저장하지 않습니다.<br />
        실제 송금은 본인 은행 앱에서 진행됩니다.
      </div>

      <div className={"toast" + (toast ? " show" : "")}>{toast}</div>

      <style jsx>{`
        .wrap {
          font-family: "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif;
          max-width: 440px; margin: 0 auto; padding: 24px 18px 40px;
          color: #2c4636;
        }
        .head { text-align: center; margin-bottom: 18px; }
        .name { font-size: 38px; font-weight: 900; letter-spacing: 0.03em; }
        .tag { margin-top: 6px; font-size: 14px; color: #6b7468; font-weight: 600; }
        .verse {
          text-align: center; font-size: 14px; line-height: 1.6; color: #3a4a3c;
          background: #fff; border: 1px solid #e6d8bd; border-radius: 14px;
          padding: 14px 16px; margin-bottom: 18px; font-weight: 600; word-break: keep-all;
        }
        .ref { display: block; margin-top: 8px; color: #b08746; font-size: 12px; font-weight: 700; }
        .acct {
          background: #2c4636; color: #f6efe2; border-radius: 18px;
          padding: 20px 18px; margin-bottom: 16px; box-shadow: 0 10px 24px rgba(44,70,54,0.18);
        }
        .label { font-size: 12px; color: #cdb98a; font-weight: 700; letter-spacing: 0.05em; }
        .bank { font-size: 15px; font-weight: 600; margin-top: 8px; opacity: 0.92; }
        .num { font-size: 27px; font-weight: 900; letter-spacing: 0.02em; margin-top: 2px; }
        .holder { font-size: 13px; margin-top: 8px; opacity: 0.8; }
        .btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; border: none; border-radius: 14px; cursor: pointer;
          font-size: 17px; font-weight: 800; padding: 16px; margin-bottom: 10px; color: #fff;
        }
        .btn-copy { background: #b08746; }
        .btn-toss { background: #0064ff; }
        .section-t { font-size: 13px; color: #6b7468; font-weight: 700; text-align: center; margin: 18px 0 12px; }
        .banks { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .bankbtn {
          background: #fff; border: 1px solid #e6d8bd; border-radius: 14px;
          padding: 12px 6px; cursor: pointer;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
        }
        .logo {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 900;
        }
        .bname { font-size: 11px; font-weight: 700; color: #2c4636; }
        .note {
          margin-top: 18px; background: #fff; border: 1px solid #e6d8bd; border-radius: 14px;
          padding: 14px 16px; font-size: 13px; line-height: 1.6; color: #6b7468; text-align: center;
        }
        .note b { color: #2c4636; }
        .foot { margin-top: 18px; font-size: 11px; color: #9a9587; text-align: center; line-height: 1.6; }
        .toast {
          position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%) translateY(20px);
          background: #2c4636; color: #fff; padding: 13px 20px; border-radius: 30px;
          font-size: 14px; font-weight: 700; opacity: 0; pointer-events: none;
          transition: opacity 0.25s, transform 0.25s; box-shadow: 0 8px 22px rgba(0,0,0,0.25);
          max-width: 90vw; text-align: center;
        }
        .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
      `}</style>
      <style jsx global>{`
        body { background: radial-gradient(circle at 50% -10%, #fbf6ec 0%, #f6efe2 55%, #efe5d2 100%); min-height: 100vh; }
      `}</style>
    </main>
  );
}
