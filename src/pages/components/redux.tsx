import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// Action 의 타입을 문자열로 정의
const CHANGE_THEME = "CHANGE_THEME";

// type 이 CHANGE_THEME인 Action 객체를 생성하여 반환
const changeTheme = () => ({
  type: CHANGE_THEME,
});

// Reducer 함수 정의 > 수신된 Action을 가공하여 새로운 상태를 만듦
const themeReducer = (state = "white", action: { type: string }) => {
  switch (action.type) {
    case CHANGE_THEME:
      return state === "black" ? "white" : "black";
    default:
      return state;
  }
};

// createStore 함수를 사용해 themeReducer를 기반으로 Redux store을 생성
const store = createStore(themeReducer);

// ThemeProvider 컴포넌트 정의
const ThemeProvider = ({
  theme,
  handleClick,
}: {
  theme: string;
  handleClick: () => void;
}) => (
  <button
    onClick={handleClick}
    style={{ backgroundColor: theme, width: "100px", height: "50px" }}
  ></button>
);

// ThemeProvider 컴포넌트의 상태를 Redux와 연결하기 위해 mapStateToProps 함수 정의
const mapStateToProps = (state: string) => ({
  theme: state,
});

// ThemeProvider 컴포넌트의 액션을 Redux와 연결하기 위해 mapDispatchToProps 함수 정의
const mapDispatchToProps = (dispatch: (action: { type: string }) => void) => ({
  handleClick: () => dispatch(changeTheme()),
});

// mapStateToProps와 mapDispatchToProps는 ThemeProvider 컴포넌트를 Redux store과 연결하는 데 사용됩니다. mapStateToProps는 Redux store의 상태를 props로 매핑하고, mapDispatchToProps는 dispatch를 수행하는 함수를 props로 매핑합니다.
const ConnectedThemeProvider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeProvider);

export default function Redux() {
  return (
    <Provider store={store}>
      <ConnectedThemeProvider />
    </Provider>
  );
}
