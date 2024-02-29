import { useStore } from "@/store/useCombine";

export default function How() {
  const { cart, login } = useStore();

  return (
    <div className="wrap">
      <div className="box">
        <h2>사용해 보기</h2>

        <h3>1. 설치</h3>
        <pre>
          <code>npm install zustand</code>
        </pre>
      </div>
      <div className="box">
        <h2>Middleware 종류</h2>

        <h3>Immer</h3>
        <pre>
          <code>npm install immer</code>
        </pre>

        <p>
          JavaScript 객체를 변경할 때 직관적인{" "}
          <span className="word" title="데이터 구조나 객체가 변경됨">
            뮤테이션 코드
          </span>
          를 작성할 수 있도록 도와주는 라이브러리입니다. <br />이 라이브러리의
          핵심 기능은{" "}
          <span
            className="word"
            title="데이터가 생성된 후에 수정되지 않는 특성"
          >
            불변성
          </span>
          데이터 구조 처리를 단순화할 수 있습니다.
          <br />
          참고 파일 : useButtonChange.tsx
        </p>

        <p>
          <a
            href="https://docs.pmnd.rs/zustand/integrations/immer-middleware"
            target="_blank"
          >
            https://docs.pmnd.rs/zustand/integrations/immer-middleware
          </a>
        </p>

        <h3>DevTools</h3>
        <p>
          개발 중에 <span className="underline">상태 변경을 추적</span>하고{" "}
          <span className="underline">시각적으로 모니터링</span>하는데 사용되는
          미들웨어입니다. <br />
          크롬 확장프로그램의{" "}
          <a href="https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko">
            Redux-Devtools
          </a>{" "}
          을 추가한 후 개발자 도구의 redux 패널에서 애플리케이션의 상태 변화를
          쉽게 확인하고 디버깅할 수 있습니다.
          <br />
          참고 파일 : useButtonChange.tsx
        </p>

        <h3>Persist</h3>
        <p>
          상태를 영속적으로 저장하고 다시 불러오는 데 사용되는 미들웨어이다.{" "}
          <br />
          애플리케이션이 종료되거나 새로고침이 되어도 상태를 유지할 수 있도록
          도와준다. 저장소는 기본적으로{" "}
          <span className="underline">localStorage</span>를 사용하지만, 사용자가
          원하는 저장메커니즘으로 커스텀할 수 있다.
        </p>
        <p>
          <a
            href="https://docs.pmnd.rs/zustand/integrations/persisting-store-data"
            target="_blank"
          >
            https://docs.pmnd.rs/zustand/integrations/persisting-store-data
          </a>
        </p>

        <h3>Combine</h3>
        <p>
          Zustand의 combine은 상태를 결합하게 해주는 유틸리티 함수이다. 이를
          통해 컴포넌트간에 일관적이고 상태를 생성하고 관리할 수 있다. <br />
          참고 파일 : useCombine.tsx
        </p>

        <button onClick={() => console.log(cart, login)}>체크용</button>

        <p>
          혹은 : useBoundStore 을 사용 하여 두가지 상태 관리를 합치는 방법이
          있다.
          <br />
          <a href="https://docs.pmnd.rs/zustand/guides/slices-pattern">
            https://docs.pmnd.rs/zustand/guides/slices-pattern
          </a>
        </p>

        <h3>Subscribe</h3>
        <p>
          상태 변경에 대한 반응으로 함수를 실행하기 위해 사용되는 메서드이다.
          <br />
          참고 파일 : useButtonChange.tsx
        </p>

        <h3>useShallow</h3>
        <p>상태 선택자 내의 값이 변경될때만 반응하여 리랜더링 하는 훅이다.</p>
        <p>
          <a
            href="https://docs.pmnd.rs/zustand/guides/prevent-rerenders-with-use-shallow"
            target="_blank"
          >
            https://docs.pmnd.rs/zustand/guides/prevent-rerenders-with-use-shallow
          </a>
        </p>

        <h3>타사 라이브러리</h3>
        <p>
          <a
            href="https://docs.pmnd.rs/zustand/integrations/third-party-libraries"
            target="_blank"
          >
            https://docs.pmnd.rs/zustand/integrations/third-party-libraries
          </a>
        </p>
      </div>
    </div>
  );
}
