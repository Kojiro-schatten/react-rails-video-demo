import styled from 'styled-components'

export const StyledShareView = styled.div`

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
`;