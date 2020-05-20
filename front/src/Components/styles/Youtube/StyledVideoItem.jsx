import styled from 'styled-components';

export const StyledVideoItem = styled.div`
.content {
  text-align: left;
  padding-left: 5px
}
@media screen and (max-width: 1080px) {
  .videoItem {
    display: flex;
    margin: 20px 10px;
  }
}

@media screen and (max-width: 768px) {
  .videoItem {
    flex-direction: column;
  }
}

`;