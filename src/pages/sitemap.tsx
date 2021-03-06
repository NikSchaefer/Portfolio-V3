/* eslint-disable sonarjs/no-identical-functions */
import { Section } from "@components/design";
import Layout from "@components/layout";
import { underlineCSS } from "@styles/style";
import { NextSeo } from "next-seo";
import Link from "next/link";

type Link = {
	link: string;
	name: string;
};

const mainContent: Link[] = [
	{
		link: "/",
		name: "Home",
	},
	{
		link: "/blog",
		name: "Blog",
	},
	{
		link: "/about",
		name: "About",
	},
	{
		link: "/portfolio",
		name: "Portfolio",
	},
];
const otherPages: Link[] = [
	{
		link: "/snippets",
		name: "Code Snippets",
	},
	{
		link: "/repos",
		name: "Repositories",
	},
	{
		link: "/stats",
		name: "Github Stats",
	},
];

export default function Sitemap(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Sitemap" />
			<Section class="blog">
				<article>
					<h1>Site Map</h1>
					<h2>Main Content</h2>
					<ul className="list-disc list-inside">
						{mainContent.map((value) => (
							<li key={value.link}>
								<Link href={value.link} passHref>
									<a className={underlineCSS}>{value.name}</a>
								</Link>
							</li>
						))}
					</ul>
					<span>
						other pages not worthy of featuring on the main index
						page
					</span>
					<ul className="list-disc list-inside">
						{otherPages.map((value) => (
							<li key={value.link}>
								<Link href={value.link} passHref>
									<a className={underlineCSS}>{value.name}</a>
								</Link>
							</li>
						))}
					</ul>
				</article>
			</Section>
		</Layout>
	);
}
