import styled from 'styled-components';

export const StyledHeader = styled.div`
background: #1c1c1c;
padding: 0 15px;
box-sizing: border-box;
.header-content {
  color: #ffffff;
  font-size: 32px;
  max-width: 1280px;
  min-height: 100px;
  padding: 20px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    max-width: 1280px;
    min-height: 0px;
  }
}
`;