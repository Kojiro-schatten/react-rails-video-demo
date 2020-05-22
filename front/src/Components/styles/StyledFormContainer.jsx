import styled from 'styled-components';

export const StyledFormContainer = styled.div`
padding: 0 20px;
box-sizing: border-box;
  .tweetButton {
    color: #919191;
    display: inline-block;
    padding: 12px 50px;
    list-style: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: none;
    border-radius: 32px;
    background: #F5F5F5;
    box-shadow: -10px 10px 19px #d5d5d5, 10px -10px 24px #ffffff;
  }
  .searchButton {
    color: #919191;
    display: inline-block;
    margin-top: 10px;
    padding: 12px 50px;
    list-style: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: none;
    border-radius: 12px;
    background: #F5F5F5;
    box-shadow: -5px 1px 45px #d5d5d5, 5px 0px 24px #ffffff;
  }
  button:active, input:focus, textarea:focus {
    transition: all .2s ease-in;
    box-shadow: inset -10px 10px 19px #d5d5d5, inset 10px -10px 19px #ffffff;
  }
`;