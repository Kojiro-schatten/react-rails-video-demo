import styled from 'styled-components';

export const StyledFooter = styled.div`
.contents{
	background-color: #F5F5F5;
	margin: auto;
	// margin-bottomは、footerのheightと同一値にする事
	margin-bottom: 60px;
	min-height: 8vh;
	box-shadow: inset 10px -10px 19px #ffffff;
	border-radius: 28px;
}
footer {
	position: fixed;
	z-index: -100;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 60px;
	padding: 28px;
	background-color: #F5F5F5;
}
footer p {
	font-size: 1em;
	font-weight: 300;
	color: #919191;
	margin-bottom: 2em;
}
footer .copyright {
	float: left;
	width: 50%;
}
footer .copyright p {
	font-size: .7em;
	color: #919191;
	text-align: left;
	line-height: 2em;
	letter-spacing: 1px;
}
footer .sns {
	float: right;
	width: 50%;
}
footer .sns .fa {
	font-size: 18px;
}
footer .sns a {
	font-weight: bold;
	line-height: 1.5em;
	width: 4em;
	margin: auto 0.1em;
	float: right;
	text-align: center;
	text-decoration: none;
	color: #919191;
	border-radius: 4px;
	background-color: #F5F5F5;
}
footer .sns a:hover {
	background-color: #F5F5F5;
}
`