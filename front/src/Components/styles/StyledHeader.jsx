import styled from 'styled-components';

export const StyledHeader = styled.div`
border-radius: 16px;
background: #F5F5F5;
box-shadow:  -10px 10px 23px #dadada, 
             10px -10px 23px #ffffff;
color: #919191;

.header-content {
  display: flex;
  align-items: center;
}

.header-left {
  border-radius: 8px;
  background: #F5F5F5;
  position: relative;
  left: 20px;
  box-shadow: -10px 10px 24px #d5d5d5, 10px -10px 24px #ffffff;
}

.header-left:hover {
  box-shadow: inset -10px 10px 19px #d5d5d5, 
  inset 10px -10px 19px #ffffff;
}

.header-right {

}

.header-left a {
  color: #919191;
  display: inline-block;
  padding: 12px 50px;
  list-style: none;
  text-decoration: none;
}

.header-right a {
  color: #919191;
  display: inline-block;
  padding: 12px 50px;
  list-style: none;
  text-decoration: none;
  border-radius: 32px;
  background: #F5F5F5;
  box-shadow: -10px 10px 19px #d5d5d5, 10px -10px 24px #ffffff;
}

.header-right a:hover {
  box-shadow: inset -10px 10px 19px #d5d5d5, 
  inset 10px -10px 19px #ffffff;
}


.header-center-text {
  font-size: 18px;
  max-width: 1280px;
  min-height: 60px;
  vertical-align: middle;
  padding: 10px 0px;
  align-items: center;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  left: 9%;
  line-height: 40px;
}
@media screen and (max-width: 500px) {
  max-width: 1280px;
  min-height: 0px;
}
`;