import classes from './filter-buttons.module.scss'

interface Props {
	items: FilterItem[]
}

interface FilterItem {
	name: string
	id: string
}

function FilterButtons({ items }: Props) {
	return (
		<ul className={classes.filter_items} >
			{items.map(({ name, id }) =>
				<li key={id} className={classes.filter_item} >
					<button className={classes.filter_tag_button} >
						{name}
					</button>
				</li>
			)}
		</ul>
	)
}
export { FilterButtons }