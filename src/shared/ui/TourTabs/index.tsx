import Link from 'next/link'
import classes from './tour-tabs.module.scss'

interface Props {
	items: Item[]
}
interface Item {
	name: string
	id: string
}

function TourTabs({ items }: Props) {
	return (
		<div className={classes.wrapper}>
			<ul className={classes.items} >
				{items.map((el) =>
					<li className={classes.item} key={el.id} >
						<div className={classes.body}>
							<p className={classes.text} >
								{el.name}
							</p>
						</div>
					</li>
				)}
			</ul>
		</div>
	)
}
export { TourTabs }