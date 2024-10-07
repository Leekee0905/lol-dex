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

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/><img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
<br/>
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/><img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>

## 프로젝트 기간

2024.09.25 ~ 24.10.07

## 🎨 주요 기능

### 홈페이지
![home](https://github.com/user-attachments/assets/ecf8fa9a-b56c-48bf-a88c-15a6543545e3)  

![hover](https://github.com/user-attachments/assets/2a09a1b8-75e9-41a0-ad07-b0d8f96522df)

### 로테이션
![rotation](https://github.com/user-attachments/assets/648c1f5e-b4fe-44f8-800b-593b8e39e9a4)

### 챔피언 목록
![champions](https://github.com/user-attachments/assets/a964a815-a699-4a83-a539-a4171c3051f1)

### 챔피언 상세
![detail](https://github.com/user-attachments/assets/8a2e8a37-d299-4efc-ad36-4af52435538b)

### 아이템 목록
![items](https://github.com/user-attachments/assets/3a4e071c-2a2f-4380-ad5b-0b0783b9b82b)

### 다크모드
![darkmode](https://github.com/user-attachments/assets/66ae6a5c-9e86-4154-a687-6a9e7c117763)

### 반응형
![반응형](https://github.com/user-attachments/assets/86c5e816-ccb6-4e2e-8f8d-c7d25ff0db84)

### 로딩 페이지
![loading](https://github.com/user-attachments/assets/f09908eb-cb13-41dd-9cd4-77a240ee0688)  

loading.tsx 파일을 이용한 로딩페이지 구현
### 에러 페이지
![error](https://github.com/user-attachments/assets/4fe80fe0-8392-4cd4-b367-a3449d2485e3)  

global-error.tsx와 error.tsx파일을 통한 에러 처리 페이지

## 트러블 슈팅

[next-themes 라이브러리를 통한 다크모드 구현 중 에러 발생](https://velog.io/@leekee0905/TIL-%EB%8B%A4%ED%81%AC-%EB%AA%A8%EB%93%9C-%EA%B5%AC%ED%98%84-%EC%A4%91-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85)  

### 에러
![image](https://github.com/user-attachments/assets/e8abf5be-83d1-4c61-b3d7-1e02b096c780)  
클라이언트에 마운트하기 전에 현재 테마를 기반으로 UI를 렌더링하려고 하면 hydration 불일치 오류가 발생한다

### 해결
클라이언트에서 mount가 된 이후에 렌더링이 될 수 있도록 mount라는 state를 통해 여부를 확인 후 렌더링
```tsx
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
```
