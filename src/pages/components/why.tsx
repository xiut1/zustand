export default function Why() {
  return (
    <div className="wrap">
      <div className="box">
        <h2>React 상태관리</h2>

        <h3>상태란?</h3>
        <p>
          컴포넌트 내부에서 관리되며 어플리케이션의 렌더에 영향을 미치는 플레인
          자바스크립트 객체이다. 변화하는 데이터 라고도 한다.
        </p>

        <h3>상태의 종류</h3>
        <ul>
          <li>
            <strong>지역상태</strong> : 특정 컴포넌트 안에서만 관리되는 상태를
            뜻한다. 다른 컴포넌트들과 데이터를 공유하지 않는다.
          </li>
          <li>
            <strong>전역 상태</strong> : 프로젝트 전체에 영향을 끼치는 상태이다.
          </li>
        </ul>
      </div>

      <div className="box">
        <h2>React에서의 상태 관리 툴</h2>
        <h3>Context API</h3>
        <p>
          <strong>Context API</strong>는{" "}
          <span className="underline">
            <strong>React</strong>
          </span>
          에서 만든, React 컴포넌트 트리 안에서 전역 상태를 공유할 수 있도록
          만들어진 방법이다.
        </p>
        <p>
          전역 상태관리 도구 라고 하기엔, Context API는 아무것도 관리하지
          않는다. Context API는 종속성을 주입하기위한 도구일 뿐이다. <br />
          React에서의 실질적인 상태관리는 <strong>useState</strong>,
          <strong> useReducer</strong>를 통해 일어난다.
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
            제공하기 위해서는 Root Component (index.js / app.js)에서 Provider를
            정의해주어야 한다.
          </li>
          <li>
            <strong>Consumer</strong>는 제공받은 전역 상태를 받아서 사용하는
            역할을 한다. Context는 Consumer 사이에 있는 첫 객체를 Context에
            인자로 전달하기 때문에, 바로 JSX를 작성하면 안되고, 빈 객체를
            작성하고나서 JSX를 작성해야한다.
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

        <h3>Redux</h3>
        <p>
          Redux는 전역 상태관리를 위한 도구로, 자바스크립트 앱을 위한 에측
          가능한 상태 컨테이너이다.
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
          <li></li>
        </ul>

        <h3>React Query</h3>

        <img src="../public/npm-trand-01.png" alt=""></img>
      </div>
    </div>
  );
}
