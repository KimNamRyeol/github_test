// src/api.js
const BASE_URL = process.env.API_BASE_URL || '';  // 필요에 따라 수정

// 분리배출 규칙 가져오기
export async function fetchWasteRules() {
  const res = await fetch(`${BASE_URL}/api/waste-rules`);
  if (!res.ok) throw new Error('규칙 불러오기 실패');
  return res.json();
}

// 게임 결과 전송하기
// export async function postGameResult(userId, score, level) {
//   const res = await fetch(`${BASE_URL}/api/game/result`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     credentials: 'include',  // 인증 쿠키 필요 시
//     body: JSON.stringify({ userId, score, level, timestamp: Date.now() })
//   });
//   if (!res.ok) throw new Error('결과 전송 실패');
//   return res.json();
// }
