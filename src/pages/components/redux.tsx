import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// 액션 타입 정의
const CHANGE_THEME = "CHANGE_THEME";

// 액션 생성자 함수 정의
const changeTheme = () => ({
  type: CHANGE_THEME,
});

// 리듀서 함수 정의
const themeReducer = (state = "white", action: { type: string }) => {
  switch (action.type) {
    case CHANGE_THEME:
      return state === "black" ? "white" : "black";
    default:
      return state;
  }
};

// Redux 스토어 생성
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

// React Redux와 연결된 ThemeProvider 컴포넌트 생성
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
