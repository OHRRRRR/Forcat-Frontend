# Forcat-Frontend

## 프로젝트 개요
Forcat-Frontend는 반려동물을 위한 쇼핑몰 서비스의 프론트엔드로, 상품 관리, 소셜 로그인, 장바구니, 결제 기능 등을 지원합니다. 언어는 Typescript를 사용하고, 핵심 라이브러리로는 **React 18.3.1**를 사용합니다. 스타일 도구는 **styled-components 6.1.13** 를 사용합니다. 빌드 도구는 **vite 5.4.8** 를 사용합니다. 서버상태관리는 **Tanstack Query 5.59.15**, 클라이언트 상태관리는 **Recoil 0.7.7**을 사용합니다.

### 프로젝트 환경
- **프로그래밍 언어**: typescript 5.5.3
- **스타일 도구**: styled-components 6.1.13
- **라이브러리**: react 18.3.1
- **빌드 도구**: vite 5.4.8
- **패키지 관리 도구**: yarn 1.22.19
- **서버 상태 관리**: tanstack Query 5.59.15
- **클라이언트 상태 관리**: Recoil 0.7.7

## 기술 스택 및 선택 이유
정적 타입을 통해 코드 안정성을 높이기 위해 `Typescript`를 사용합니다. `React`는 컴포넌트 기반 아키텍쳐를 제공하기 때문에 재사용성과 유지 보수성이 높고, 가상 DOM을 통해 필요한 부분만 업데이트하여 성능을 향상할 수 있으므로 선택하였습니다. `styled-components`는 props를 사용하여 스타일을 동적으로 변경할 수 있다는 점에서 도입하게 되었습니다. 

## 주요 구현 특징
### 1. Cursor based Pagination (커서 기반 페이지네이션)
기존 offset 방식이 아닌, 특정 커서를 기반으로 다음 데이터를 가져오기 때문에, 데이터의 양이 많아지더라도 처리 속도가 크게 떨어지지 않아 효율적인 커서 기반 페이지네이션을 사용합니다. 다음 데이터의 시작 지점을 알 수 있는 커서를 제공하기 때문에 무한 스크롤 방식의 페이징에 매우 적합하고, 사용자는 추가 로드를 요청할 때마다 새로운 커서를 기준으로 데이터를 가져오면 되므로, 사용자 경험 또한 더 매끄럽게 돕습니다.

### 2. 스타일 일관성
색상, 폰트 크기, 폰트 두께를 정의한 theme 객체를 생성하여 스타일의 일관성을 높였습니다. 또한, styled-components를 사용해 Text, Block, Button, Img, Input 컴포넌트 등을 재사용 가능하도록 세팅하였습니다.

### 3. 폴더 구조
```bash
├── public
│   └── svg
├── src
│   ├── api
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── interfaces
│   ├── pages
│   ├── recoil
│   └── style
└── App.tsx
```

각 폴더의 역할에 맞게 분류하였습니다. 
예를 들어, 재사용 가능한 컴포넌트는 `/src/componenst` 아래에 정의하도록 했습니다.
`/public/svg` 폴더 내부에 svg 이미지를 담고 **SVGR**을 사용하여 컴포넌트화 된 svg파일은 `/src/assets` 폴더 아래에 위치하게 됩니다.

## 주요 구현 사항 (기능별 Sprint)
### SPRINT_1: 상품 관리 기능 (10/18 ~ 10/23, 총 6일 소요)
- **[완료]** 피그마 디자인 시스템
- **[완료]** 프로젝트 초기 세팅
- **[완료]** 헤더, 푸터, 네비게이션 바 컴포넌트 제작
- **[완료]** 상품 전체 조회 페이지
- **[완료]** 상품 상세 조회 페이지
- **[완료]** 카테고리 별 상품 페이지

### SPRINT_2: 사용자 인증 및 고양이 관리 기능 (10/24 ~ 10/29, 총 6일 소요)
- **[완료]** 카카오 소셜 로그인 API 연결
- **[진행중]** 회원가입 (사용자, 고양이 정보 입력받기)
- **[진행중]** 마이페이지
- **[진행중]** 장바구니 페이지

### SPRINT_3: 상품 주문 및 결제 연동 (10/30 ~ 11/3, 총 5일 소요)
- **[예정]** 주문 내역 및 결제 로직 구현
- **[예정]** 결제 API 연결

### SPRINT_4: 부가 기능 및 추천 서비스 (11/4 ~ 11/5, 총 2일 소요)
- **[예정]** 이벤트 기능 추가 (예: 특가, 할인)
- **[예정]** 추천 상품 서비스 구현

## 시작하기 (Getting Started)
   ```bash
   git clone https://github.com/forcat-project/Forcat-Frontend.git
   cd forcat-frontend
   yarn
   yarn dev
   ```
