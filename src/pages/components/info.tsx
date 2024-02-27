export default function Info() {
  return (
    <div className="wrap">
      <div className="box">
        <h2>Zustand 란?</h2>
        <p>
          Zustand는 독일어로 &apos;<span className="underline">상태</span>&apos;
          라는 뜻을 가진 라이브러리
          <br />
        </p>

        <h3>Zustand 장점</h3>
        <ul>
          <li>작고 빠르다</li>
          <li>특정 라이브러리에 엮이지 않는다.</li>
          <li>
            한 개의 중앙에 집중된 형식의 스토어 구조를 활용하면서, 상태를
            정의하고 사용하는 방법이 단순하다.
          </li>
          <li>
            Context API를 사용할 때와 달리 상태 변경 시 불필요한 리랜더링을
            일으키지 않도록 제어하기 쉽다.
          </li>
          <li>
            동작을 이해하기 위해 알아야 하는 코드 양이 아주 적다. <br />
            핵심 로직의 코드 줄 수가 약 42줄밖에 되지 않는다.
          </li>
        </ul>
      </div>
    </div>
  );
}
