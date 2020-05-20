import styled from 'styled-components'

export const StyledShareView = styled.div`
margin-top: 20px;

[role="tablist"] {
  display: flex;
  
}

[role="presentation"] {
  list-style:none;
}

[aria-hidden="true"] {
  display: none;
}

[aria-hidden="false"] {
  display: block;
}

[aria-selected="true"] {
  background-color: royalblue;
  color: white;
}

button {
  color: #919191;
  display: inline-block;
  padding: 12px 50px;
  list-style: none;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: none;
  border-radius: 32px;
  background: #F5F5F5;
  box-shadow: -10px 10px 19px #d5d5d5, 10px -10px 24px #ffffff;
}
`;