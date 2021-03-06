import { H1 } from "@components/design";
import Layout from "@components/layout";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Link from "next/link";

import json from "../../../content/snippets.json";

export default function Snippets(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Snippets" />
			<H1 class="my-10 text-center">Snippets</H1>
			<p className="text-center">Small bits of code that I use</p>
			<div className="flex flex-row flex-wrap items-center justify-center text-left">
				{json.map((value) => (
					<Link
						href={`/snippets/${value.link}`}
						key={value.link}
						passHref
					>
						<a
							className={clsx(
								"relative w-2/12 text-white rounded",
								"py-4 px-2 text-lg flex flex-col m-5",
								"bg-gray-800 min-w-[180px]"
							)}
						>
							<span
								className={clsx(
									"text-lg font-bold inline-block",
									"w-auto capitalize bg-green-300",
									"rounded-r mb-3 px-2 transform -translate-x-2",
									"text-gray-800 w-[fit-content]"
								)}
							>
								{value.tag}
							</span>
							<span>{value.title}</span>
						</a>
					</Link>
				))}
			</div>
		</Layout>
	);
}
