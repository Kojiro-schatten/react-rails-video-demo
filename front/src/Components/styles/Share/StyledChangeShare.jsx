import styled from 'styled-components'

export const StyledChangeShare = styled.div`
*, *:before, *:after {
	font-family: 'FontAwesome';
}
.quoteField {
	position: relative;
  width: 50%;
	margin: 4.5em auto;
}
//  引用 
.quoteField blockquote {
  position: relative;
  margin: 0;
  padding: 1.0em 0.75em;
  border: none;
  border-radius: 32px;
  background: #F5F5F5;
  box-shadow: 0px 10px 12px #d5d5d5, 50px -10px 24px #ffffff;
}
.quoteField blockquote a {
  text-decoration: none;
  color: #717171;
  overflow: hidden;
  display: block;
}
.quoteField blockquote a:hover {
  color: #337ab7;
}
// アイコン
.quoteField blockquote::before {
	font-size: 2.5em;
	line-height: 0;
	position: absolute;
	top: 0;
	left: 0.3em;
	content: '\f10d';
	color: #919191;
}
// 引用元名 
.quoteField .author {
	position: relative;
	top: 15px;
	right: 0;
	width: 100%;
	text-align: right;
}
.quoteField .author p {
	font-size: 0.8em;
	font-weight: bold;
	position: absolute;
	top: -0.8em;
	width: calc(100% - 20px);
	padding: 0.3em;
}
.quoteField .author p span {
	font-size: 0.7em;
	font-weight: normal;
	font-style: italic;
	display: block;
	padding: 0.3em;
}
@media screen and (max-width: 768px) {
  .quoteField {
    width: 80%;
  }
}
`;