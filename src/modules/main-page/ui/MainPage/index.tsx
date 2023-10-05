import { Wrapper } from "@/shared/ui/Wrapper"
import { AboutProject } from "@/widgets/AboutProject"
import { Advertising } from "@/widgets/Advertising"
import { BannerMain } from "@/widgets/BannerMainPage"
import { Gallery } from "@/widgets/Gallery"
import { MapContent } from "@/widgets/Map"
import { Timeline } from "@/widgets/Timeline"
import { ToursAndActivities } from "@/widgets/ToursAndActivities"

function MainPage() {
	return (
		<Wrapper>
			<BannerMain />
			<ToursAndActivities />
			<Advertising />
			<Timeline />
			<MapContent />
			<Gallery />
			<AboutProject />
		</Wrapper>
	)
}
export { MainPage }