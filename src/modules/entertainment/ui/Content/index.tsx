'use client'
import { Tour } from '@/shared/ui/Tour'
import { FilterButtons } from '../../../../shared/ui/FilterButtons'
import { filterItems } from '../../consts/filter'
import classes from './content.module.scss'
import { tourCard } from '../../consts/tourCard'
import { sortItems } from '../../consts/sortItems'
import { WrapperContent } from '@/shared/ui/WrapperContent'

function Content() {
	return (
		<WrapperContent header={
			<div className={classes.filter} >
				<div className={classes.filter_top} >
					<p className={classes.filter_text} >
						Фильтры
					</p>
					<div className={classes.filter_result} >
						<p className={classes.filter_result_text}>
							Всего туров:
							<span>8000</span>
						</p>
					</div>
				</div>
				<div className={classes.filter_body} >
					<div className={classes.block_tags} >
						<FilterButtons items={filterItems} />
					</div>
					<div className={classes.sort_block} >
						<select className={classes.sort} name='sort'>
							{sortItems.map((el) =>
								<option value={el.id} key={el.id} >{el.name}</option>
							)}
						</select>
					</div>
				</div>
			</div>} >
			<ul className={classes.result_items} >
				{tourCard.map((el) =>
					<Tour key={el.name} tour={el} />
				)}
			</ul>
		</WrapperContent>
	)
}
export { Content }