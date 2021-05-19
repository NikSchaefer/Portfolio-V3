import Layout from "@components/layout";
import Link from "next/link";
import styled from "styled-components";

import json from "../../../content/snippets.json";

const StyledLink = styled.a`
	text-align: left;
	background-color: #2e3440;
	position: relative;
	max-width: 200px;
	margin: auto;
	border-radius: 0.25rem;
	.tag {
		color: #2e3440;
		background-color: #a7f3cf;
		width: fit-content;
		padding: 0.25rem 0.5rem;
		font-weight: 600;
		font-size: 18px;
		border-top-right-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
		text-transform: capitalize;
		transform: translateX(-10px);
	}
	color: white;
	padding: 1rem 10px;
	font-family: "Mukta", sans-serif;
	font-size: 20px;
	display: flex;
	margin: 20px;
	flex-direction: column;
	:hover {
		cursor: pointer;
	}
`;
const Container = styled.div`
	display: flex;
	flex-flow: wrap row;
	justify-content: center;
	align-items: center;
`;
export default function Snippets(): JSX.Element {
	return (
		<Layout>
			<h1>Snippets</h1>
			<p>Small bits of code that I use</p>
			<Container>
				{json.map((value) => (
					<Link href={`/snippets/${value.link}`} key={value.link}>
						<StyledLink>
							<span className="tag">{value.tag}</span>
							<span>{value.title}</span>
						</StyledLink>
					</Link>
				))}
			</Container>
		</Layout>
	);
}