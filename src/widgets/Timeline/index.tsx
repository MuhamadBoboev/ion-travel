'use client'
import { Typography } from '@/shared/ui/Typography'
import classes from './timeline.module.scss'
import { TimelineDate } from './TimelineDate'
import { HandySvg } from 'handy-svg'

function Timeline() {
	return (
		<div className={classes.timeline}>
			<Typography className={classes.title} size='h1' >
				Коротко о Таджикистане
			</Typography>
			<ul className={classes.items}>
				{TimelineDate.map((el) =>
					<li className={classes.item} key={el.name}>
						<div className={classes.body}>
							<div className={classes.top}>
								<div className={classes.info} >
									<div className={classes.tag} >
										<Typography size='s' className={classes.text_1}>
											{el.tag}
										</Typography>
									</div>
									<Typography size='h1' className={classes.text_2}>
										{el.name}
									</Typography>
								</div>
								{/* <HandySvg className={classes.item_handle} src='/assets/icons/handle.svg' width={48} height={48} alt='handle' /> */}
							</div>
							<div className={classes.text}>
								<Typography size='l' className={classes.text_3} >
									{el.description}
								</Typography>
							</div>
						</div>
					</li>)}
			</ul>
		</div>
	)
}
export { Timeline }