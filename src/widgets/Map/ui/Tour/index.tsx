import classes from './tour.module.scss'

interface Props {
	id: number
	name: string
}

function Tour({ id, name }: Props) {
	return (
		<div className={classes.tour_item}>
			<p className={classes.tour_text} >
				<span>{id.toString().padStart(2, '0')}</span>
				<span className={classes.tour_dot} >
					{name}</span>
			</p>
		</div>
	)
}
export { Tour }