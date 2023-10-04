import { Typography } from '@/shared/ui/Typography'
import classes from './card.module.scss'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface Props {
	card: Card
}
interface Card {
	title: string
	text: string
	image: string
	link: string
	active?: boolean
	setActive?: Dispatch<SetStateAction<Boolean>>
}

function Card({ card }: Props) {
	return (
		<div className={classes.card} >
			<div className={classes.card_body} >
				<div className={classes.bl_img} >
					<img src={card.image} width={228} height={228} alt='card' />
				</div>
				<p className={classes.card_title}>
					{card.title}
				</p>
				<Typography size='s' className={classes.card_text}>
					{card.text}
				</Typography>
				<Link href={card.link} className={classes.button} >
					Подробнее
				</Link>
			</div>
		</div>
	)
}
export { Card }