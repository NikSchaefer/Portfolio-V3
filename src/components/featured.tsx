import clsx from "clsx";
import { Blog } from "config";
import Link from "next/link";

function FeaturedArticle(props: {
	Blog: Blog;
	className: string;
}): JSX.Element {
	return (
		<Link href={props.Blog.link}>
			<a
				className={clsx(
					"transform hover:scale-[1.01] h-[110px] transition-all rounded-xl w-full md:w-1/3 p-1 md:h-[150px]",
					props.className
				)}
			>
				<div className="bg-white h-full rounded-xl p-3 pb-0 relative dark:bg-shark dark:text-white">
					<h3 className="font-semibold mb-4 text-lg">
						{props.Blog.title}
					</h3>
					<span className="mb-0 absolute bottom-2">
						{props.Blog.min} min
					</span>
				</div>
			</a>
		</Link>
	);
}

export default FeaturedArticle;
