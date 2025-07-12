import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { type FC } from "react";
import wow from "../../assets/wow.png";
interface HoverCardProps {
	bgColour: string;
	imageClass: string;
	textClass: string;
	image: string;
	showWow?: boolean;
	text?: string;
}
const HoverCard: FC<HoverCardProps> = ({
	bgColour,
	imageClass,
	textClass,
	image,
	showWow,
	text,
}) => {
	return (
		<div className="flex items-center relative">
			<button className="absolute -left-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:shadow-gray-800">
				<ArrowLeftIcon />
			</button>
			<button className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:shadow-gray-800 transition-shadow">
				<ArrowRightIcon />
			</button>
			<div
				className={`object-cover inner-curve-left h-65 w-95 ${bgColour} relative `}
			>
				<img src={image} alt="" className={`${imageClass}`} />
			</div>
			{showWow ? (
				<>
					<img
						src={wow}
						alt=""
						className="absolute z-12 translate-x-2 -translate-y-15"
					/>
					<img
						src={wow}
						alt=""
						className="absolute z-12 translate-x-80 translate-y-10"
					/>
				</>
			) : null}
			<div className={`inner-curve-right h-65 ${bgColour} -z-10`}></div>
			<div
				className={`absolute text-black ${textClass} z-10 p-5 whitespace-pre-wrap`}
			>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default HoverCard;
