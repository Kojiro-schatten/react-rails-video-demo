import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  .searchBar {
    margin: 12px 0;
    display: flex;
    justify-content: center;
  }
  
  label {
    margin-right: 10px;
  }

  input {
    color: #919191;
    display: inline-block;
    padding: 6px 55px;
    list-style: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: none;
    border-radius: 12px;
    background: #F5F5F5;
    box-shadow: -5px 1px 45px #d5d5d5, 5px 0px 24px #ffffff;
  }
`;
