import { CardsDate } from '../../consts/CardsDate'
import { Card } from '../Card'
import classes from './content.module.scss'

function Content() {
	return (
		<div className={classes.content}>
			<div className={classes.items}>
				{CardsDate.map((el) =>
					<Card card={el} key={el.id} className={classes.item} />
				)}
			</div>
		</div>
	)
}

export { Content }