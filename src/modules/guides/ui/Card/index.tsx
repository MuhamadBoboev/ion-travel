import clsx from 'clsx'
import classes from './card.module.scss'

interface Props {
	card: Card
	className?: string
}

interface Card {
	id?: number
	job: string
	name: string
	img: string
}

function Card({ card, className }: Props) {
	return (
		<div className={clsx(
			classes.item,
			className
		)}>
			<div className={classes.body} >
				<div className={classes.imb_bl} >
					<img src={card.img} width={432} height={480} alt={card.name} />
				</div>
				<p className={classes.subtitle} >{card.job}</p>
				<p className={classes.title} >{card.name}</p>
			</div>
		</div>
	)
}
export { Card }