import classes from './tours-and-activities.module.scss'
import { Typography } from '@/shared/ui/Typography'
import { Button } from '@/shared/ui/Button'
import { Tours } from './Tours'
import Link from 'next/link'

function ToursAndActivities() {
	return (<>
		<div className={classes.wrapper}>
			<div className={classes.info} >
				<div className={classes.left_block}>
					<div className={classes.info_left}>
						<Typography size='m' className={classes.text_1}>
							Лови момент!<br />
							Открой Таджикистан для себя
						</Typography>

						<Link href='tours'>
							<Button className={classes.text_2} >
								Туры и развлечения
							</Button>
						</Link>

					</div>
					<div className={classes.title_block}>
						<h3 className={classes.title}>Эмоции, которыми ты захочешь делиться</h3>
					</div>
				</div>
				<div className={classes.info_right}>
					<Typography size='xl' className={classes.text_3} >
						Ты пройдёшь по скрытым от общих глаз улочкам, завернешь в самые колоритные местные дворики, узнаешь об истории города через игру.
					</Typography>
				</div>
			</div>
			<Tours />
		</div>
	</>)
}
export { ToursAndActivities }