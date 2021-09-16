import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
	:root {
		--primary: #ffffff;
		--secondary: #fafafa;
		--grey: #eeeeee;
		--accent: #00a2ff;
		--border: #dddddd;
		--title: black;
		--header: #24292d;
		--about-text: #586069;
		--tag-background: #f1f8ff;
		--blog-text: #2e3440;
		--tag-hover: #e4effc;
		--scrollbar: rgb(175, 175, 175);
		--footer: rgb(79, 82, 88);
		--footer-hover: rgb(21, 21, 22);
		--paragraph: rgb(75, 85, 99);
	}

	.darkmode {
		--primary: #131722;
		--secondary: #1a202c;
		--grey: #1e2633;
		--accent: #00a2ff;
		--border: #4d5562;
		--title: white;
		--header: var(--primary);
		--about-text: #d1d1d1;
		--tag-background: var(--secondary);
		--blog-text: rgb(231, 231, 231);
		--tag-hover: #21263d;
		--scrollbar: #414f75;
		--footer: rgb(193, 200, 212);
		--footer-hover: rgb(241, 241, 241);
		--paragraph: rgb(156,163,175);
	}
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: var(--secondary);
	}

	::-webkit-scrollbar-thumb {
		background: var(--scrollbar);
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		text-align: center;
		background-color: var(--primary);
		color: var(--paragraph);
		min-height: 100vh;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			margin-top: 1rem;
		}
		to {
			opacity: 1;
			margin-top: 0.75rem;
		}
	}
	.fadeIn {
		animation: fadeIn 0.2s ease;
	}

	.appear {
		display: flex!important;
	}

	@keyframes PopupAnimation {
		0% {
			transform: translateY(0px) translateX(-50%)
		}
		10% {
			transform: translateY(180px) translateX(-50%)
		}
		90% {
			transform: translateY(180px)translateX(-50%)
		}
		100% {
			transform: translateY(0px)	translateX(-50%)
		}
	}

	.popinout {
		animation: PopupAnimation 5s;
	}
	
	.slide {
		margin: 10px auto;
		position: relative;
		transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
		color: var(--accent);
		&:hover {
			cursor: pointer;
		}
			&::before {
			content: "";
			position: absolute;
			border-width: 0.3px;
			width: 0;
			left: 0;
			height: 1.5px;
			bottom: 0%;
			visibility: hidden;
			transition: all 0.2s ease-in-out;
			border-color: var(--accent);
		}
		&:hover::before {
			visibility: visible;
			width: 100%;
		}	text-align: center;
	}

	.iframe {
		height: calc(100vh - 180px);
		width: calc(100vw - 10px);
		margin: auto;
		box-sizing: border-box;
	}

	.hackclub {
		position: absolute;
	top: 0;
	left: 0;
	border: 0;
	width: 170px;
	z-index: 999;
	transform-origin: 0% 0%;
	@media (max-width: 700px) {
		width: 100px;
		top: 10px;
	}
	:hover {
		animation: WaveFlag 1.25s linear infinite alternate;
	}
	}
	@keyframes WaveFlag {
		0% {
		transform: rotate(0deg)
		}
		50% {
			transform: rotate(-5deg)

		}
		100% {
			transform: rotate(0deg)
		}
	}
	.active {
		color: #ffffff;
	}

	/* CODE CSS */
	code[class*="language-"],
	pre[class*="language-"] {
		color: #393a34;
		font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New",
			Courier, monospace;
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		font-size: 0.95em;
		line-height: 1.6em;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	pre > code[class*="language-"] {
		font-size: 1em;
	}

	pre[class*="language-"]::-moz-selection,
	pre[class*="language-"] ::-moz-selection,
	code[class*="language-"]::-moz-selection,
	code[class*="language-"] ::-moz-selection {
		background: #b3d4fc;
	}

	pre[class*="language-"]::selection,
	pre[class*="language-"] ::selection,
	code[class*="language-"]::selection,
	code[class*="language-"] ::selection {
		background: #b3d4fc;
	}

	/* Code blocks */
	pre[class*="language-"] {
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
		border: 1px solid #dddddd;
		background-color: white;
		background-color: rgb(252, 254, 255);
		border: 1px solid rgb(237, 242, 247);
	}

	/* Inline code */
	code:not([class*="language-"]) {
		padding: 0.4em;
		border-radius: 0.2px;
		background: #f8f8f8;
		border: 1px solid #dddddd;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #999988;
		font-style: italic;
	}

	.token.namespace {
		opacity: 0.7;
	}

	.token.string,
	.token.attr-value {
		color: #e3116c;
	}

	.token.punctuation,
	.token.operator {
		color: #393a34; /* no highlight */
	}

	.token.entity,
	.token.url,
	.token.symbol,
	.token.number,
	.token.boolean,
	.token.variable,
	.token.constant,
	.token.property,
	.token.regex,
	.token.inserted {
		color: #36acaa;
	}

	.token.atrule,
	.token.keyword,
	.token.attr-name,
	.language-autohotkey .token.selector {
		color: #00a4db;
	}

	.token.function,
	.token.deleted,
	.language-autohotkey .token.tag {
		color: #9a050f;
	}

	.token.tag,
	.token.selector,
	.language-autohotkey .token.keyword {
		color: #00009f;
	}

	.token.important,
	.token.function,
	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}
	
	/* END CODE CSS */

`;

// eslint-disable-next-line import/no-default-export
export default Global;
