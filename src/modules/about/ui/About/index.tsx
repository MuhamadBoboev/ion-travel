import { Wrapper } from "@/shared/ui/Wrapper"
import { AboutProject } from "@/widgets/AboutProject"
import { Banner } from "@/widgets/Banner"
import classes from './about.module.scss'

function About() {
	return (
		<Wrapper>
			<div className={classes.wrapper} >
				<AboutProject />
			</div>
		</Wrapper>
	)
}
export { About }