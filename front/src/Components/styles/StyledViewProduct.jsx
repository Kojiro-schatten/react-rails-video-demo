import styled from 'styled-components'

export const StyledViewProduct = styled.div`
display: flex;
align-items: center;
  button, input {
    color: #919191;
    display: inline-block;
    list-style: none;
    border: none;
    background: #F5F5F5;
    text-decoration: none;
    box-shadow: -5px 1px 45px #d5d5d5, 5px 0px 24px #ffffff;
    margin: 10px 6px;
    border-radius: 12px;
  }
  button:focus, input:focus, textarea:focus {
    transition: all .2s ease-in;
    box-shadow: inset -10px 10px 19px #d5d5d5, inset 10px -10px 19px #ffffff;
  }
  .deleteButton {
    padding: 4px 24px;
  }
  .updateButton {
    padding: 4px 20px;
  }
  .updateTextButton {
    padding: 4px 40px;
  }
`;
