import Image from "next/image";

export default function Why() {
  return (
    <div className="wrap">
      <div className="box">
        <h2>상태관리</h2>

        <h3>상태관리가 필요해진 이유</h3>
        <ul>
          <li>
            <strong>컴포넌트간 공유</strong>
            <br />
            다수의 컴포넌트에서 공용으로 사용되는 상태를 관리할 때 필요합니다.
            예를 들어 사용자 인증 정보, 로그인 상태, 언어 설정, 테마 등과 같이
            애플리케이션의 여러 부분에서 공유해야 하는 데이터를 관리합니다.
          </li>
          <li>
            <strong>상태의 일관성</strong>
            <br />
            리액트는 <span className="underline">단방향 하향식</span> 데이터
            흐름을 가진다. 복잡하게 중첩된 컴포넌트에서는 상태를 상위로 전달하는
            것이 복잡할 수 있다. 이를 해결하기 위해{" "}
            <span className="underline">전역 상태관리</span>를 이용하면 여러
            컴포넌트에서 동일한 상태를 효율적으로 접근하고 업데이트할 수 있다,
            이를 통해 상태의 일관성을 유지할 수 있다.
          </li>
        </ul>
      </div>

      <div className="box">
        <h2>React에서의 다양한 상태관리 툴</h2>

        <h3>Context API</h3>
        <p>
          <strong>Context API</strong>는{" "}
          <span className="underline">
            <strong>React</strong>
          </span>
          에서 만든, React 전역 상태를 공유하게 해주는 도구이다.
        </p>
        <p>
          Context의 실질적인 상태관리는{" "}
          <span className="underline">useState</span>,{" "}
          <span className="underline">useReducer</span>를 통해 일어난다.
        </p>
        <ul>
          <li>
            <strong>Context</strong>는 전역 상태를 저장하는 곳이다. Context
            내부에 Provider와 Consumer가 정의되어있고, Consumer는 Context를
            통해서 상태에 접근이 가능하다.
          </li>
          <li>
            <strong>Provider</strong>는 전역 상태를 제공하는 역할을 한다.
            Context에 상태를 제공해서 다른 컴포넌트가 상태에 접근할 수 있도록
            도와준다. 제공된 상태에 접근하기 위해서는 Provider 하위에 컴포넌트가
            포함되어있어야한다. 보통 모든 컴포넌트에 접근해야하는 상태를
            제공하기 위해서는 Root Component (index.js / _app.js)에서 Provider를
            정의해주어야 한다.
          </li>
          <li>
            <strong>Consumer</strong>는 제공받은 전역 상태를 받아서 사용하는
            역할을 한다.
          </li>
        </ul>
        <p>
          참고자료 :{" "}
          <a
            href="https://ko.legacy.reactjs.org/docs/context.html"
            target="_blank"
          >
            https://ko.legacy.reactjs.org/docs/context.html
          </a>
        </p>

        <h3>Recoil</h3>
        <p>
          Recoil은 Context API 기반으로 구현된 함수형 컴포넌트에서만 사용 가능한
          라이브러리이다.
        </p>
        <p>
          Recoil은 <span className="underline">Atom</span>과{" "}
          <span className="underline">Selector</span>로 구성되어 있다. Atom은
          고유 키로 식별되는 상태 단위이며, 이를 구독하는 컴포넌트는 선택적으로
          리렌더링된다. Atom 상태 변경은 Selector라 불리는 순수 함수를 통해
          발생하며, 이는 비동기 처리 및 데이터 캐싱 기능을 제공하여 비동기
          데이터 처리를 용이하게 한다.
        </p>

        <h3>Redux</h3>
        <p>
          Redux는 전역 상태관리를 위한 도구로, 자바스크립트 앱을 위한{" "}
          <span
            className="word"
            title="상태의 변화의 순서와 데이터 흐름을 추적하기 쉽고"
          >
            예측
          </span>
          가능한 상태 관리 라이브러리이다.
        </p>
        <ul>
          <li>
            <strong>Store</strong>는 컴포넌트와 별개로 스토어라는 폴더 내에서,
            프로젝트내에서 필요한 상태를 담는다. 컴포넌트에서 상태 정보가 필요할
            때 스토어에 접근한다.
          </li>
          <li>
            <strong>Action</strong>은 앱에서 스토어에 운반할 데이터를 말한다.
            Action은 자바스크립트 객체 형식으로 되어 있다.
          </li>
          <li>
            <strong>Reducer</strong>는 Action을 수신 한 후 새로운 상태를
            생성하는 함수이다.
          </li>
        </ul>

        <h3>React Query</h3>
        <p>조혜진_이모션님이 열심히 설명한 관계로 이하 생략</p>
      </div>
      <div className="box">
        <h3>글로벌 사용량</h3>
        <Image
          src={"/npm-trand-01.png"}
          alt={"npm-trand"}
          width={2660}
          height={1654}
        />

        <h3>최근 업데이트</h3>
        <Image
          src={"/npm-trand-02.png"}
          alt={"npm-trand"}
          width={2674}
          height={792}
        />
      </div>
    </div>
  );
}
