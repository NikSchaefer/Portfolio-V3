import styled from "styled-components";

const Heading = styled.h1`
	font-size: 60px;
	margin-bottom: 1rem;
	@media (max-width: 800px) {
		font-size: 40px;
	}
`;

const SubHeading = styled.h2`
	font-family: inherit;
	margin: 0;
	margin-bottom: 1rem;
	font-weight: 700;
	letter-spacing: -0.025em;
	color: var(--text);
	font-size: 2.25rem;
	line-height: 2.5rem;
`;

const Paragraph = styled.p``;

export { Heading, SubHeading, Paragraph };
