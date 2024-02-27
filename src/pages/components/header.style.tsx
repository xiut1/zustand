import styled from "@emotion/styled";

namespace HeaderStyle {
  export const Header = styled.div`
    position: fixed;
    max-width: 1080px;
    width: 100%;
    z-index: 1;

    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(0, 0, 0, 0.75);

    .header-wrap {
      display: flex;
      justify-content: space-between;

      a {
        padding: 25px 0;
        list-style: none;
        text-align: center;
        width: 25%;
      }
    }
  `;
}

export default HeaderStyle;
