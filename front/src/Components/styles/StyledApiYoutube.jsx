import styled from 'styled-components';

export const StyledApiYoutube = styled.div`
padding: 10px 15px;
box-sizing: border-box;
width: 100%;
max-width: 1280px;
margin: 0 auto;
padding: 0 20px;
color: #919191;
.row {
  display: flex;
}
@media screen and (max-width: 1080px) {
  max-width: 780px;

  .row {
    flex-direction: column;
  }
}
`;