import React from "react";
import JourneyCard from "./components/common/JourneyCard";
import JourneySection from "./components/ui/JourneySection";
import HeaderSection from "./components/ui/HeaderSection";

const App = () => {
	return (
		<div>
			<HeaderSection />
			<section>
				<JourneySection />
			</section>
		</div>
	);
};

export default App;
