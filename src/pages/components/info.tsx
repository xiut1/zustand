export default function Info() {
  return (
    <div className="wrap">
      <div className="box">
        <h2>Zustand 란?</h2>
        <p>
          Zustand는 독일어로 &apos;<span className="underline">상태</span>&apos;
          라는 뜻을 가진 JavaScript 라이브러리로, <br />
          전역 상태를 사용하기 위해 필요한 양방향 바인딩, 불필요한 렌더링 등의
          복잡성을 줄이고자 만들어졌다.
          <br />
        </p>

        <h3>Zustand 장점</h3>
        <ul>
          <li>
            <strong>작고 가벼움</strong> <br /> Zustand는 큰 상태 관리
            라이브러리의 중량감을 원하지 않는 작은 앱에 이상적인 선택이다. 이
            라이브러리는 단지 1KB로, 성능에 부담을 주지 않으면서도 낮은 사이즈를
            유지한다.
          </li>
          <li>
            <strong>간단하고 직관적인 API</strong> <br /> Zustand의 API는 함수형
            업데이트를 지원하고, 그것들이 Hook에서 쉽게 사용될 수 있도록
            설계되었다.
          </li>
          <li>
            <strong>필요한 것만 가져오기</strong> <br /> 상태 및 함수를 필요한
            것만 가져올 수 있다.
            <br /> 이를 통해 불필요한 리렌더링을 최소화할 수 있다.
          </li>
          <li>
            <strong>상태 변화 관찰</strong> <br /> Zustand는 subscribe 함수를
            제공하여 상태 변화를 직접 관찰할 수 있게 한다.
          </li>
          <li>
            <strong>TypeScript 지원</strong> <br /> Zustand는 TypeScript와 잘
            호환되어 타입 안전성을 보장한다.
          </li>
          <li>
            <strong>Middleware 지원</strong> <br /> Zustand는 Redux와 비슷하게
            미들웨어를 지원하여 개발을 좀 더 유연하게 할 수 있게 해준다.
            devtools, persist
            <br />
            ex) 특정작업에 대한 로그기록, 에러 처리, 비동기 작업, 캐시
          </li>
          <li>
            사용 방법이 간단하고 러닝 커브가 낮기 때문에 다른 상태 관리 도구보다
            쉽게 사용할 수 있다. <br />
            -&gt; 유지 보수 및 인수 인계가 편하다.
          </li>
        </ul>

        <h3>Zustand 단점</h3>
        <ul>
          <li>
            <strong>대규모 애플리케이션에는 덜 적합</strong> <br /> Zustand는
            API가 간단하고 심플하여 작은 애플리케이션에서 훌륭하게 작동하지만,
            <br />
            규모가 큰 애플리케이션이 상태 관리에 대한 더 정교한 요구 사항을 갖는
            경우에는 부적합할 수 있다.
          </li>
          <li>
            <strong>학습 자료 부족</strong> <br /> Zustand는 다른 상태관리
            라이브러리에 비해 상대적으로 새로운 라이브러리이며, 따라서 학습
            자료와 커뮤니티 지원이 다른 상태 관리 라이브러리들에 비해 상대적으로
            부족할 수 있다.
          </li>
        </ul>
      </div>
    </div>
  );
}
