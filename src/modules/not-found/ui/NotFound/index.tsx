import { Wrapper } from "@/shared/ui/Wrapper"
import classes from './not-found.module.scss'

function NotFound() {
	return (
		<Wrapper>
			<div className={classes.body} >
				<h1 className={classes.title}>Это страница не найдена</h1>
			</div>
		</Wrapper>
	)
}
export { NotFound }