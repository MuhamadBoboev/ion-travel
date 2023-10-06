'use client'
import { WrapperContent } from '@/shared/ui/WrapperContent'
import classes from './content.module.scss'
import { TourTabs } from '@/shared/ui/TourTabs'
import { TourTabsItems } from '../../consts/TourTabsItems'
import { InfoBlockLocateDate } from '../../consts/InfoBlockLocate'
import { InfoBlockLocate } from '../InfoBlockLocate'
import { InfoBlock } from '@/shared/ui/InfoBlock'
import { InfoBlockDate } from '../../consts/InfoBlock'

function Content() {
	return (
		<WrapperContent
			header={
				<div className={classes.tabs}>
					<TourTabs items={TourTabsItems} />
				</div>
			}>
			<div className={classes.main_body} >
				<ul className={classes.items}>
					<li className={classes.item} key={InfoBlockLocateDate.id}>
						<InfoBlockLocate item={InfoBlockLocateDate} />
					</li>
				</ul>
				<ul className={classes.items_mobile}>
					{InfoBlockDate.map((el) =>
						<li className={classes.item} key={el.id}>
							<InfoBlock item={el} />
						</li>)}
				</ul>
			</div>
		</WrapperContent>)
}
export { Content }