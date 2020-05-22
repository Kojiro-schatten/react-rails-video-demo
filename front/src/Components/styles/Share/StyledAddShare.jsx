import styled from 'styled-components'

export const StyledAddShare = styled.div`
form {
  padding: 4px 0;
}
input, textarea {
  margin: 28px auto;
  color: #919191;
  display: block;
  list-style: none;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: none;
  width: 50%;
  border-radius: 32px;
  background: #F5F5F5;
  box-shadow: -10px 10px 19px #d5d5d5, 10px -10px 24px #ffffff;
}

input {
  padding: 12px 50px;
}

textarea {
  padding: 12px 50px;
  height: 100px;
}

input:focus, textarea:focus {
  transition: all .2s ease-in;
  box-shadow: inset -10px 10px 19px #d5d5d5, inset 10px -10px 19px #ffffff;
}

button:active {
  transition: all .2s ease-in;
  box-shadow: inset -10px 10px 19px #d5d5d5, inset 10px -10px 19px #ffffff;
}

@media screen and (max-width: 768px) {
  input, textarea {
    width: 80%;
  }
}
`;