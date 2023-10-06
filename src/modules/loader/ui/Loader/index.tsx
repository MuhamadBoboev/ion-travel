'use client'
import { Wrapper } from '@/shared/ui/Wrapper'
import classes from './loader.module.scss'
import { HandySvg } from 'handy-svg'

function Loader() {
	return (
		<Wrapper>
			<div className={classes.body} >
				<h1 className={classes.title} >
					Loading
				</h1>
				<div className={classes.img_bl} >
					<HandySvg className={classes.img} src='/assets/icons/loader.svg' width={50} height={50} alt={'loading'} />
				</div>
			</div>
		</Wrapper>
	)
}
export { Loader }