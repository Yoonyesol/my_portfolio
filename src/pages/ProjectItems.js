import { imageUrl } from "../utils/commonUtil";

export const projectItems = [
  {
    title: "🌓Dream note",
    category: "개인 프로젝트",
    imageUrl: `${imageUrl}assets/images/dn1.png`,
    githubLink: "https://github.com/Yoonyesol/Dream_note",
    deployLink: "https://dreamnote-9f9f2.web.app",
    blogLink: "https://tinyurl.com/ylvw7xjd",
    description:
      "꿈 속에서 겪었던 즐겁거나 흥미로운 일들이 금방 휘발되는 것이 아까워 잊기 전에 기록하기 위해 개발한 어플리케이션입니다.",
    features:
      "꿈 일기 기록/조회/수정/삭제(CRUD)기능, 일기 장르 태그 지정 기능, 일기 제목/본문 검색 기능, 이미지 업로드 기능, LocalStorage를 이용해 일기를 로컬에 저장하기, 모바일-데스크탑 호환 가능한 반응형 웹",
    retrospective:
      "개발 과정을 블로그에 모두 기록하며 실제 제게 가장 필요한 기능만 간결히 구현하였습니다. 프로그램 구현 시 가장 기본이 되는 CRUD 개발에 익숙해질 수 있었고, FileReader() 객체를 이용해 이미지를 업로드할 수 있었습니다. 평소 알고 있었던 includes() 함수를 이용해 검색 기능을 구현해 보는 과정도 흥미로웠습니다. Firebase로 호스팅하여 실제 배포를 완료하였으며 호스팅 과정도 블로그에 상세히 기록하였습니다. 실제 어플리케이션을 사용해 본 결과, 다양한 기기에서 동기화가 이루어지면 좋겠다는 생각이 들어 현재는 Firebase를 이용한 서버 구축을 진행 중입니다.",
    techStack: "JavaScript, React, Html, Css, LocalStorage, Firebase",
  },
  {
    title: "⏰Stop Watch",
    category: "개인 프로젝트",
    imageUrl: `${imageUrl}assets/images/stopwatch1.png`,
    githubLink: "https://github.com/Yoonyesol/Clock-Web",
    deployLink: "https://glittering-belekoy-da2ec9.netlify.app/",
    description:
      "코딩테스트 준비를 하며 문제 풀이 시간 측정 프로그램이 필요해 직접 만든 스톱워치 사이트입니다. React, Vue와 같은 라이브러리를 사용하지 않고 Vanilla JavaScript를 이용해 제작하였습니다.",
    features:
      "스톱워치 기능, 랩 버튼 클릭 시 시간 기록 기능, 다크모드 지원, 현재 시간 안내, 상단의 시계와 밀리초 숨김 기능, 전체화면 기능, 반응형 웹",
    retrospective:
      "리액트를 사용한 후 제작한 사이트이기 때문에, Vanilla JavaScript를 이용하는 동안 리액트 컴포넌트 재사용성의 편리성을 체감할 수 있었습니다. setInterval을 이용해 스톱워치를 구현하고 new Date()를 사용해 시계 기능을 구현하며 시간 관련 코드 구현에 익숙해졌습니다. Netlify 호스팅 서비스를 통해 처음으로 배포까지 하여 직접 사용해 본 프로젝트이기 때문에 기억에 남습니다. 추후 스톱워치 정보를 LocalStorage에 저장해 실수로 브라우저를 닫아도 데이터가 초기화되지 않도록 하는 기능을 추가하고 백그라운드에서 스톱워치가 동작하지 않는 문제점을 해결할 계획입니다.",
    techStack: "JavaScript, Html, Css, Netlify",
  },
  {
    title: "🎡Portfolio",
    category: "개인 프로젝트",
    imageUrl: `${imageUrl}assets/images/portfolio1.png`,
    githubLink: "https://github.com/Yoonyesol/my_portfolio",
    deployLink: "https://yoonyesol.github.io/my_portfolio/",
    blogLink: "https://tinyurl.com/yu9yg6hc",
    description: "취업을 위해 개발한 포트폴리오 웹입니다.",
    features: "자기소개, 저장소 및 프로젝트 소개, 이메일 전송 기능",
    retrospective:
      "css 사용에 익숙해졌고 Emailjs를 이용해 서버 구축 없이 이메일을 보내는 기능도 구현해 보았습니다.",
    techStack: "JavaScript, React, Html, Css, Emailjs",
  },
  {
    title: "‍👨‍👧‍👧Social Account Book",
    category: "개인 프로젝트 (진행중)",
    imageUrl: `${imageUrl}assets/images/social1.png`,
    githubLink: "https://github.com/Yoonyesol/Web-Social-Account-Book",
    blogLink: "https://tinyurl.com/yke3b74w",
    description:
      "소셜 가계부는 나의 수입/지출 기록을 통해 돈의 흐름을 파악할 수 있는 가계부 웹 어플리케이션입니다. 혼자 가계부를 입력하는 것이 지루한 사용자를 위해 일반 가계부에 게시판 기능을 도입하였습니다. 나의 자산을 기록하고 재테크에 관심있는 사람들끼리 정보도 공유하며 돈 모으는 재미를 한층 증진시킬 수 있는 서비스를 제작하고자 하였습니다.",
    features:
      "프론트엔드 대시보드, 가계부, 게시판, 내 정보 페이지 및 핵심 CRUD 구현(백엔드와 연동x, 더미데이터) 스프링부트와 연동해 소셜 로그인 구현 node.js 사용해 채팅 기능 구현",
    retrospective: "",
    techStack: "JavaScript, React, Html, Css, Express, node.js, Spring Boot",
  },
];
