# 📗 롤 대백과사전

Riot API를 활용하여 리그오브레전드 정보를 보여주는 페이지입니다.

## 🔗 배포 링크

https://lol-dex.vercel.app

## 📚 프로젝트 구조

<details>
<summary>폴더 구조</summary>

```
lol-dex
├─ .gitignore
├─ components.json
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ public
│  └─ assets
│     ├─ link.cur
│     ├─ logo.png
│     └─ normal.cur
├─ README.md
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ rotation
│  │  │     └─ route.ts
│  │  ├─ champions
│  │  │  ├─ page.tsx
│  │  │  └─ [name]
│  │  │     ├─ loading.tsx
│  │  │     └─ page.tsx
│  │  ├─ error.tsx
│  │  ├─ favicon.ico
│  │  ├─ global-error.tsx
│  │  ├─ globals.css
│  │  ├─ items
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ loading.tsx
│  │  ├─ page.tsx
│  │  └─ rotation
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ ChampionCard.tsx
│  │  ├─ detail
│  │  │  ├─ ChampionDetail.tsx
│  │  │  ├─ ChampionSkill.tsx
│  │  │  └─ ChampionSkins.tsx
│  │  ├─ home
│  │  │  └─ ThumbnailList.tsx
│  │  ├─ items
│  │  │  └─ ItemCard.tsx
│  │  ├─ layout
│  │  │  ├─ Header.tsx
│  │  │  ├─ HiddenHeaderList.tsx
│  │  │  └─ ThemeButton.tsx
│  │  └─ ui
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     └─ carousel.tsx
│  ├─ hooks
│  │  └─ queries
│  │     └─ useGetRotationQuery.ts
│  ├─ lib
│  │  └─ utils.ts
│  ├─ providers
│  │  └─ RQProvider.tsx
│  ├─ types
│  │  ├─ championType.ts
│  │  ├─ itemType.ts
│  │  └─ rotationType.ts
│  └─ utils
│     ├─ clientApi.ts
│     └─ serverApi.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock

```

</details>

## 개발 환경

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
<br/>
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>

## 프로젝트 기간

2024.09.25 ~ 24.10.07

## 🎨 주요 기능

### 홈페이지

### 로테이션

### 챔피언 목록

### 챔피언 상세

### 아이템 목록

### 다크모드

### 반응형

### 로딩 페이지

### 에러 페이지

## 트러블 슈팅

[next-themes 라이브러리를 통한 다크모드 구현 중 에러 발생](https://velog.io/@leekee0905/TIL-%EB%8B%A4%ED%81%AC-%EB%AA%A8%EB%93%9C-%EA%B5%AC%ED%98%84-%EC%A4%91-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85)
