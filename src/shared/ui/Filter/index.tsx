'use client'
import Link from 'next/link'
import classes from './filter.module.scss'
import { ResultItem } from './ResultItem'

function Filter() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.body} >
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
							<ul className={classes.filter_items} >
								<li className={classes.filter_item} >
									<button className={classes.filter_tag_button} >
										Все места
									</button>
								</li>
								<li className={classes.filter_item} >
									<button className={classes.filter_tag_button} >
										Туры по городам
									</button>
								</li>
								<li className={classes.filter_item} >
									<button className={classes.filter_tag_button} >
										Туры по горам
									</button>
								</li>
								<li className={classes.filter_item} >
									<button className={classes.filter_tag_button} >
										Лечебные туры
									</button>
								</li>
								<li className={classes.filter_item} >
									<button className={classes.filter_tag_button} >
										Кофешки
									</button>
								</li>
							</ul>
						</div>
						<div className={classes.sort_block} >
							<select className={classes.sort} name='sort'>
								<option value={'one'} >Сортировать</option>
								<option value={'two'} >two</option>
								<option value={'three'} >three</option>
							</select>
						</div>
					</div>
				</div>
				<div className={classes.result}>
					<ul className={classes.result_items} >
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
					</ul>
				</div>
			</div>
		</div>
	)
}
export { Filter }