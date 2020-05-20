import styled from 'styled-components';

export const StyledVideoItem = styled.div`

@media screen and (max-width: 1080px) {
  .videoItem {
    display: flex;
    margin: 20px 10px;
  }

  .content {
    padding-left: 5px
  }
}

@media screen and (max-width: 768px) {
  .videoItem {
    flex-direction: column;
  }
  .content {
    text-align: left;
  }
}

`;