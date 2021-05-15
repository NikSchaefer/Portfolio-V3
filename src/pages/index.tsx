import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { GoMarkGithub } from "react-icons/go";
import { RiLinkedinBoxFill } from "react-icons/ri";
import styled from "styled-components";

const META: MetaType = {
	title: "Nik Schaefer",
	lang: "en-us",
	description: "",
	image: "/logo.png",
	url: "https://nikschaefer.tech",
};

const Container = styled.section`
	text-align: left;
	width: 90%;
	margin: auto;
	max-width: 800px;
	font-family: "Mukta", sans-serif;
	h1 {
		font-size: 60px;
		margin-bottom: 5px;
	}
	p {
		margin: 0;
		font-size: 24px;
	}
`;

const SocialLinks = styled.div`
	margin: 20px 0;
	display: flex;
	align-items: center;
	a {
		margin: 10px;
		:hover {
			cursor: pointer;
		}
	}
`;
const StyledA = styled.a`
	:hover {
		svg {
			fill: ${(props) => props.color};
		}
	}
`;
const StyledButton = styled.a`
	font-size: 20px;
	padding: 5px 10px;
	border: #afaeae solid 1px;
	border-radius: 2px;
	:hover {
		background-color: #fafafa;
	}
`;
export default function Home(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<Container>
				<h1>Hi, I'm Nik Schaefer</h1>
				<p>
					I'm Nik, self-taught full-stack developer and hobbyist
					programmer student based in Minnesota, US
				</p>
				<SocialLinks>
					<StyledButton>Get In Touch</StyledButton>
					<StyledA
						color="black"
						href="https://github.com/NikSchaefer"
						aria-label="Github"
					>
						<GoMarkGithub size="35px" color="#333333" />
					</StyledA>
					<StyledA
						color="#0a65c3"
						href="https://www.linkedin.com/in/nikschaefer/"
						aria-label="LinkedIn"
					>
						<RiLinkedinBoxFill size="40px" color="#333333" />
					</StyledA>
				</SocialLinks>
				<section>
					<h2>Projects</h2>
					
				</section>
			</Container>
		</Layout>
	);
}
