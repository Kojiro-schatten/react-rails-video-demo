import styled from 'styled-components';

export const StyledApiRender = styled.div`
padding: 10px 15px;
box-sizing: border-box;
width: 100%;
max-width: 768px;
margin: 0 auto;
  form {
    margin-bottom: 12px;
  }
  .ApiRenderItem {
    list-style: none;
    text-align: left;
  }
  button, input {
    color: #919191;
    display: inline-block;
    list-style: none;
    -webkit-text-decoration: none;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    background: #F5F5F5;
    box-shadow: -5px 1px 45px #d5d5d5, 5px 0px 24px #ffffff;
    box-shadow: -5px 1px 45px #d5d5d5, 5px 0px 24px #ffffff;
  }
  button:focus, input:focus, textarea:focus {
    transition: all .2s ease-in;
    box-shadow: inset -10px 10px 19px #d5d5d5, inset 10px -10px 19px #ffffff;
  }
  .searchButton {
    padding: 4px 40px;
  }
  .searchClickButton {
    padding: 4px 20px;
  }
}
`;