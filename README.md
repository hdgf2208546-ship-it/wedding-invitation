# 홍길동 · 홍길순 결혼 초대장

모바일에서 편하게 열 수 있는 React + Vite 청첩장입니다. 화면의 문구와 장소 정보는 `src/data/weddingData.js`에서 수정합니다.

## 실행

필요 환경: Node.js 20 이상

```sh
npm install
npm run dev
```

브라우저에서 Vite가 표시하는 로컬 주소를 엽니다. 배포 전 빌드는 다음 명령으로 확인할 수 있습니다.

```sh
npm run build
npm run preview
```

빌드 결과는 `dist/`에 생성됩니다. 일반 정적 호스팅에 `dist/` 안의 파일을 게시하면 됩니다. `vite.config.js`의 상대 경로 설정으로 GitHub Pages 하위 경로를 포함한 하위 디렉터리 호스팅을 지원합니다.

## 수정 위치

- 이름, 날짜, 인사말, 연락처, 장소, 주소, 네이버 지도 링크: `src/data/weddingData.js`
- 디자인과 색상: `src/styles/theme.css`
- 화면 구성: `src/components/`
- 달·별·토끼 삽화: `public/illustrations/`
- 공유 미리보기 이미지 원본: `public/og-image.svg` 및 `public/og-image.jpg`

사진을 넣으려면 이미지를 `public/`에 추가하고, 원하는 컴포넌트에서 `${import.meta.env.BASE_URL}파일명`으로 참조하세요. 이 저장소에는 요청에 따라 실제 사진을 넣지 않았으며, 청첩장에는 자체 제작한 삽화를 사용합니다.

## 장소 안내

지도 미리보기는 장식용 도식이며 실제 도로 배치를 나타내지 않습니다. 미리보기와 '네이버 지도로 길 찾기' 링크를 누르면 전달받은 네이버 장소 페이지가 열립니다. 정확한 약도를 이미지로 제공하려면 장소에서 받은 약도 파일을 `public/`에 추가해 주세요.

## 배포

`npm run build`를 실행한 뒤 `dist/`의 내용을 정적 웹 호스팅 서비스에 게시하세요. 호스팅 서비스에서 별도 환경 변수나 API 키는 필요하지 않습니다. 저장소에 `.env` 파일, 비밀키, 토큰은 포함하지 않습니다.