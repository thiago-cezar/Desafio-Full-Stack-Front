import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --Grey-0:#F8F9FA;
	--Purple:purple;
	--DarkBlue:darkblue;
	--White:#fff;
	--Black:#000;
	--Orange:rgba(228, 100, 0);
	--Yellow:rgba(231, 200, 0);
    --Grey-1:#868E96;
    --Grey-2:#343B41;
    --Grey-3:#212529;
    --Grey-4:#121214;
    --Sucess:#3FE864;
    --Negative:#E83F5B;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;
