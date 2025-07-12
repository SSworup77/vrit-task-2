import smiling from "../../assets/smiling.png";
import working from "../../assets/working.png";
import { cardContents } from "../../constants/text";
import HoverCard from "../common/HoverCard";
import JourneyCard from "../common/JourneyCard";

const JourneySection = () => {
	return (
		<div className="relative px-5 py-10 space-y-4 grid grid-cols-2 gap-2 mt-1 mx-15 gap-x-7">
			{cardContents.map((card) => (
				<JourneyCard
					key={card.id}
					title={card.title}
					subtitle={card.subtitle}
					description={card.description}
					image={
						typeof card.image === "string"
							? card.image
							: Object.values(card.image)[0]
					}
					bgColour={card.bgColour}
					imagePosition={card.imagePosition as "left" | "right"}
					custom={card.class}
					hoverable={card.hoverable}
				/>
			))}
			<div className="absolute translate-x-6 translate-y-10">
				<HoverCard
					bgColour="bg-red"
					imageClass="relative h-65 z-50"
					textClass="translate-x-55 -translate-y-20 nohemi text-white font-semibold tracking-wider"
					image={smiling}
					showWow
					text={`Clarity unlocked—\nstickers,sips, and skills all in one go!`}
				/>
			</div>
			<div className="absolute translate-x-158 translate-y-10">
				<HoverCard
					bgColour="bg-green"
					imageClass=" relative h-55 w-200 translate-x-15 z-50 translate-y-10"
					textClass="translate-x-10 -translate-y-18 nohemi text-white font-semibold tracking-wider"
					image={working}
					text={`Focused faces—learning\n mode: ON!`}
				/>
			</div>
		</div>
	);
};

export default JourneySection;
