import { type FC } from "react";

interface JourneyCardProps {
	title: string;
	subtitle: string;
	description: string;
	image: string;
	bgColour?: string;
	imagePosition: "left" | "right";
	custom?: string;
	hoverable?:boolean
}
const JourneyCard: FC<JourneyCardProps> = ({
	title,
	subtitle,
	description,
	image,
	bgColour,
	imagePosition,
	custom,
	hoverable
}) => {
	return (
		<div
			className={`relative flex flex-col sm:flex-row ${
				imagePosition === "right" ? "sm:flex-row-reverse flex-col-reverse" : ""
			}items-center sm:items-start p-6 rounded-2xl shadow-md text-gray-100 ${bgColour} overflow-visible h-65 w-140 z-1 ${hoverable?"hover:-translate-x-50 hover:opacity-0 duration-600 ease-in-out":""}`}
		>
			<div
				className={`w-28 ${imagePosition === "right" ? "-mr-5" : "-ml-5"}`}
			>
				<img
					src={image}
					alt=""
					className={`w-45 transform relative z-20 ${
						imagePosition === "right"
							? ""
							: ""
					} animate-floating ${custom}`}
				/>
			</div>
			<div
				className={`flex-1 ${
					imagePosition === "right" ? "text-left pr-3 pl-3" : "text-right"
				} `}
			>
				<h3 className="nohemi font-bold text-xl mt-4 mr-2 tracking-wide">
					{title}
				</h3>
				<p className="text-lg font-medium mb-1 mr-2">{subtitle}</p>
				<p
					className={`text-sm font-medium mt-7 ${
						imagePosition === "right" ? "pt-3" : "ml-8 p-2 pl-7"
					}`}
				>
					{description}
				</p>
			</div>
		</div>
	);
};

export default JourneyCard;
