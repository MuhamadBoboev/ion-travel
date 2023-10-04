import { AllHTMLAttributes, ReactNode } from 'react'
import { Map } from '../Map'
import classes from './map-content.module.scss'
import clsx from 'clsx'
import { ToursDate } from '../../consts/Tours'
import { Tour } from '../Tour'

function MapContent() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.top} >
				<h3 className={classes.title} >
					Все достопремечательности Таджикистана на карте, окунись в нашу культуру и историю
				</h3>
				<div className={classes.ball} >
					<p className={classes.ball_text}>
						Наши туры
					</p>
				</div>
			</div>
			<div className={classes.body}>
				<div className={classes.text_block} >
					<div className={clsx(classes.ball, classes.ball_mobile)} >
						<p className={classes.ball_text}>
							Наши туры
						</p>
					</div>
					<div className={classes.body_text} >
						Добро пожаловать в Таджикистан! Страна в Центральной Азии с богатой
						историей и культурой! Проводя миролюбивую политику открытых дверей и
						поддерживая дружественные отношения со странами региона.
					</div>
				</div>
				<Map />
				<div className={classes.tours}>
					<div className={classes.tour_items} >
						{ToursDate.map(({ id, name }) =>
							<Tour key={id} id={id} name={name} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export { MapContent }