import { Typography } from '@/shared/ui/Typography'
import classes from './card.module.scss'
import Link from 'next/link'

function Card() {
	return (
		<div className={classes.card} >
			<div className={classes.card_body} >
				<div className={classes.bl_img} >
					<img src='assets/img/card.webp' width={228} height={228} alt='card' />
				</div>
				<p className={classes.card_title}>
					Тур по Памирскому тракту
				</p>
				<Typography size='s' className={classes.card_text}>
					Описание курорта, в две строки и так далее`
				</Typography>
				<Link href='./asd' className={classes.button} >
					Подробнее
				</Link>
			</div>
		</div>
	)
}
export { Card }