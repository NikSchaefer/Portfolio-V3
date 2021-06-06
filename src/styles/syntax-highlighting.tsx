import { css } from "styled-components";

export const SyntaxCSS = css`
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
	:not(pre) > code[class*="language-"] {
		padding: 0.2em;
		padding-top: 1px;
		padding-bottom: 1px;
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
`;
