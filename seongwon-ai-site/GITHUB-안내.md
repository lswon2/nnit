# 이성원 AI 강사 홈페이지

운영 중인 사이트: https://seongwon-ai-class.goodlemon64.chatgpt.site

Sites로 제작한 홈페이지의 전체 소스입니다. 프로필 사진, YouTube 소개 영상, 강의 안내, 신청 폼과 운영자 화면을 포함합니다.

## 주요 파일
- `app/page.tsx`: 홈페이지
- `app/globals.css`: 디자인 및 모바일 레이아웃
- `app/site-content.ts`: 기본 강의 정보, 사진, 영상 설정
- `app/manage/page.tsx`: 운영자 관리 화면
- `app/api`: 신청 접수 및 콘텐츠 저장
- `db` 및 `drizzle`: 데이터베이스 구조와 마이그레이션
- `public/lee-seongwon.png`: 프로필 사진

## 실행 및 배포
Node.js 22.13 이상, pnpm, Cloudflare Workers 및 D1 환경이 필요합니다. 기본 설명은 `README.md`를 참고하세요. 운영자 접근 코드는 `ADMIN_KEY` 환경 변수로 별도 설정합니다. 실제 신청 내역과 비밀 코드는 이 저장소에 포함되지 않습니다.

GitHub 업로드는 소스 보관용입니다. 기존 Sites 배포는 그대로 유지됩니다. GitHub Pages는 서버와 D1을 지원하지 않으므로 이 소스만으로 신청 저장 기능을 제공하지 않습니다.
