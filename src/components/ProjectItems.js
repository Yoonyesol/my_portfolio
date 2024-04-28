const url = `${process.env.PUBLIC_URL}/assets/images/`;

export const projectItems = [
  {
    title: "‍👨‍👧‍👧Social Account Book",
    category: "개인 프로젝트",
    imageUrl: [
      `${url}accountbook1.gif`,
      `${url}accountbook2.gif`,
      `${url}accountbook3.gif`,
      `${url}accountbook4.png`,
      `${url}accountbook5.png`,
    ],
    githubLink: "https://github.com/Yoonyesol/Web-Social-Account-Book-frontend",
    deployLink: "https://social-account-book-frontend.vercel.app",
    blogLink: "https://tinyurl.com/yke3b74w",
    description: "유저 간 소통이 가능한 소셜 웹 가계부 프로젝트입니다.",
    features: [
      "소비 및 지출을 기록할 수 있는 가계부",
      "좋아요, 댓글로 유저들 간 소통이 가능한 게시판",
      "예산 대비 지출 금액을 산정해 전체 유저의 랭킹을 매기는 챌린지 기능",
      "Area chart, Pie chart를 통해 사용자의 소비 패턴을 명시적으로 보여주는 대시보드",
    ],

    retrospective: [
      "프론트엔드 뿐만 아니라 ExpressJS와 Node.js, MongoDB를 이용해 백엔드까지 직접 구현하였습니다.",
      "CORS 에러 해결 방법, 백-프론트엔드 간 데이터 전송 방식, 웹 전반적인 데이터 흐름에 대해 습득했습니다.",
      "Redux 상태 관리 라이브러리 사용법을 학습 후 프로젝트에 적용하여 코드를 중앙 집중형 방식으로 관리할 수 있게 되었습니다.",
      "로컬 데이터 필터링과 API 호출의 장단점을 파악하고 상황에 맞는 데이터 호출 방법을 사용했습니다.",
      "recharts 라이브러리를 사용한 데이터 시각화 방법을 익혔습니다.",
      "JavaScript로 개발된 프로젝트를 TypeScript로 마이그레이션하였습니다.",
      "type과 interface의 차이점을 파악하고 type alias를 선택하는 나만의 기준을 세울 수 있게 되었습니다.",
      "TypeScript의 문법을 익히고 TypeScript의 장점을 직접 체감할 수 있었습니다.",
    ],
    techStack:
      "JavaScript, React, Redux, styled-components, ExpressJS, Node.js, MongoDB, Git",
  },
  {
    title: "🎡Portfolio",
    category: "개인 프로젝트",
    imageUrl: [
      `${url}portfolio1.gif`,
      `${url}portfolio2.png`,
      `${url}portfolio3.png`,
      `${url}portfolio4.png`,
      `${url}portfolio5.png`,
      `${url}portfolio6.png`,
    ],
    githubLink: "https://github.com/Yoonyesol/my_portfolio",
    deployLink: "https://yoonyesol.github.io/my_portfolio/",
    blogLink: "https://tinyurl.com/yu9yg6hc",
    description:
      "웹 사이트 형식으로 개발 이력을 정리한 프론트엔드 포트폴리오 사이트입니다.",
    features: [
      "자기소개, 저장소, 테크스택 및 프로젝트 소개, 자격, 이메일 전송 기능",
    ],
    retrospective: [
      "CSS 및 Animation 사용에 익숙해질 수 있는 프로젝트였습니다. Emailjs를 이용해 별도의 서버 구축 없이 이메일을 보내는 기능도 구현해 볼 수 있었습니다.",
    ],
    techStack: "JavaScript, React, HTML, CSS, Emailjs",
  },

  {
    title: "🌓Dream note",
    category: "개인 프로젝트",
    imageUrl: [
      `${url}dreamnote11.gif`,
      `${url}dreamnote1.png`,
      `${url}dreamnote2.png`,
      `${url}dreamnote3.png`,
      `${url}dreamnote4.png`,
    ],
    githubLink: "https://github.com/Yoonyesol/Dream_note",
    deployLink: "https://dreamnote-9f9f2.web.app",
    blogLink: "https://tinyurl.com/ylvw7xjd",
    description: "꿈일기를 작성할 수 있는 꿈노트 어플리케이션입니다.",
    features: [
      "일기 작성, 수정, 삭제, 조회",
      "일기 장르를 사용자가 직접 새로 생성하고 삭제 및 수정 가능",
      "일기의 제목, 내용을 검색할 수 있는 검색창",
      "웹 브라우저를 닫았다 열어도 사용자가 저장한 일기 데이터를 조회 가능",
    ],
    retrospective: [
      "개발 과정을 블로그에 모두 기록하며 실제 제게 가장 필요한 기능만 간결히 구현하였습니다. 프로그램 구현 시 가장 기본이 되는 CRUD 개발에 익숙해질 수 있었고, FileReader() 객체를 이용해 이미지를 업로드할 수 있었습니다. 평소 알고 있었던 includes() 함수를 이용해 검색 기능을 구현해 보는 과정도 흥미로웠습니다. Firebase로 호스팅하여 실제 배포를 완료하였으며 호스팅 과정도 블로그에 상세히 기록하였습니다. 실제 어플리케이션을 사용해 본 결과, 다양한 기기에서 동기화가 이루어지면 좋겠다는 생각이 들어 현재는 Firebase를 이용한 서버 구축을 진행 중입니다.",
    ],
    techStack: "JavaScript, React, HTML, CSS, Local Storage, Firebase",
  },
  {
    title: "⏰Stop Watch",
    category: "개인 프로젝트",
    imageUrl: [
      `${url}stopwatch2.gif`,
      `${url}stopwatch4.png`,
      `${url}stopwatch3.png`,
    ],
    githubLink: "https://github.com/Yoonyesol/Clock-Web",
    deployLink: "https://glittering-belekoy-da2ec9.netlify.app/",
    description:
      "코딩테스트 준비를 하며 문제 풀이 시간 측정 프로그램이 필요해 직접 만든 스톱워치 사이트입니다. React, Vue와 같은 라이브러리를 사용하지 않고 Vanilla JavaScript를 이용해 제작하였습니다.",
    features: [
      "스톱워치 기능, 랩 버튼 클릭 시 시간 기록 기능, local Storage를 이용한 스톱워치 정보 저장 기능, 다크모드 지원, 현재 시간 안내, 상단의 시계와 밀리초 숨김 기능, 전체화면 기능, 반응형 웹",
    ],
    retrospective: [
      "리액트를 사용한 후 제작한 사이트이기 때문에, Vanilla JavaScript를 이용하는 동안 리액트 컴포넌트 재사용성의 편리성을 체감할 수 있었습니다. setInterval을 이용해 스톱워치를 구현하고 new Date()를 사용해 시계 기능을 구현하며 시간 관련 코드 구현에 익숙해졌습니다. Netlify 호스팅 서비스를 통해 처음으로 배포까지 하여 직접 사용해 본 프로젝트이기 때문에 기억에 남습니다. 추후 백그라운드에서 스톱워치가 동작하지 않는 문제점을 해결할 계획입니다.",
    ],
    techStack: "JavaScript, HTML, CSS, Netlify",
  },
];
