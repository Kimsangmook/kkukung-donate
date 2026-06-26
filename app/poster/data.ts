export interface ReligionItem {
  label: string;
  value: string;
  color: string;
}

export interface MinistryItem {
  no: string;
  title: string;
  desc: string;
}

export interface ReportStat {
  label: string;
  value: string;
  unit: string;
  achieve: string;
  divider: boolean;
}

export interface Team {
  no: string;
  name: string;
  pledge: string;
  imgs: string[];
  activities: string[];
  members: string;
}

export interface FactBar {
  mainLabel: string;
  mainPct: number;
  restLabel: string;
  restPct: number;
}

export interface Fact {
  no: string;
  title: string;
  body?: string;
  bar?: FactBar;
}

// 01 나라 소개 — facts
export const facts: Fact[] = [
  {
    no: "1)",
    title: "정치 체제",
    body: "공산당 일당 체제. 종교의 자유는 있으나 금지된 활동은 “국가 이익·공공질서·통합”에 반하는 것으로 간주됩니다.",
  },
  {
    no: "2)",
    title: "민족 구성",
    bar: { mainLabel: "낑족 85.3%", mainPct: 85.3, restLabel: "53개", restPct: 14.7 },
  },
  {
    no: "3)",
    title: "문화 특징",
    body: "애니미즘·토테미즘에 뿌리를 둔 민간신앙과 조상 숭배가 깊이 자리하며, 기존 신앙과 함께 수용하는 경향이 있습니다.",
  },
];

// 01 종교 범례 6항목
export const religions: ReligionItem[] = [
  { label: "민간신앙·무종교", value: "86.3", color: "#CBBBA3" },
  { label: "호아하오", value: "1.0", color: "#E79A95" },
  { label: "천주교", value: "6.1", color: "#8A1713" },
  { label: "개신교", value: "1.0", color: "#C0554F" },
  { label: "불교", value: "4.8", color: "#E12B25" },
  { label: "까오다이교", value: "0.6", color: "#6E120F" },
];

// 02 핵심 사역 3개
export const ministries: MinistryItem[] = [
  {
    no: "①",
    title: "특수교육 발전 지원",
    desc: "장애 영유아 교육, 특수교사 양성, 직업재활 교육, 초콜릿 카페 운영 지원",
  },
  {
    no: "②",
    title: "소외계층 긍휼 사역",
    desc: "생활비·장학금, 장애 보장구 지원, 사랑의 집짓기로 소외계층 섬김",
  },
  {
    no: "③",
    title: "현지 교회 지원",
    desc: "주일학교·청년회 활동 지원, 크리스천 리더 양성으로 교회 세움",
  },
];

// 02 2024 연간보고서 통계 3개
export const reportStats: ReportStat[] = [
  { label: "장애영유아교실 지원", value: "85", unit: "명", achieve: "달성 100%", divider: false },
  { label: "장애 직업재활 지원", value: "23", unit: "명", achieve: "달성 100%", divider: true },
  { label: "초콜릿 카페 오픈 지원", value: "2", unit: "곳", achieve: "달성 100%", divider: false },
];

// 03 사역 소개 4팀
export const teams: Team[] = [
  {
    no: "01",
    name: "줄팀",
    pledge: "“아이들 꿀잠 재우겠습니다!”",
    imgs: ["/images/img17.png", "/images/img19.png"],
    activities: [
      "선 따라 걷기 + 과자 따먹기",
      "줄 높이뛰기 · 줄 밑 지나기",
      "신발 던지기",
      "줄넘기 기차 꼬리놀이",
    ],
    members: "1부 정다현 · 3부 장나운 · 3부 정예람",
  },
  {
    no: "02",
    name: "꾸미기팀",
    pledge: "“아이들을 디자이너로!”",
    imgs: ["/images/img15.png", "/images/img08.png"],
    activities: ["가방 꾸미기", "종이컵 팽이 꾸미기"],
    members: "2부 박하원 · 2부 박진겸",
  },
  {
    no: "03",
    name: "율동팀",
    pledge: "“아이들을 데뷔시키겠습니다!”",
    imgs: ["/images/img28.png", "/images/img27.png"],
    activities: ["율동 배우기", "‘more more more’ 율동", "풍선으로 서로 응원하기"],
    members: "2부 김예은 · 2부 김민기 · 8부 임태빈",
  },
  {
    no: "04",
    name: "미술팀",
    pledge: "“아이들을 울리지 않겠습니다!”",
    imgs: ["/images/img23.png", "/images/img24.png"],
    activities: ["페이스 페인팅", "풍선 아트"],
    members: "3부 김상묵 · 1부 최이삭 · 6부 박지수",
  },
];
