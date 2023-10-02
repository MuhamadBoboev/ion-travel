'use client'
import { WrapperContent } from '@/shared/ui/WrapperContent'
import classes from './content.module.scss'
import { TourTabs } from '@/shared/ui/TourTabs'
import { TourTabsItems } from '../../consts/TourTabsItems'
import { HandySvg } from 'handy-svg'
import { InfoBlock } from '@/shared/ui/InfoBlock'
import { InfoBlockDate } from '../../consts/InfoBlock'

function Content() {
	return (
		<WrapperContent
			header={
				<TourTabs items={TourTabsItems} />
			}>
			<div className={classes.main_body} >
				<ul className={classes.items}>
					{InfoBlockDate.map((el) =>
						<li className={classes.item} key={el.title}>
							<InfoBlock item={el} />
						</li>
					)}
				</ul>
			</div>
		</WrapperContent>)
}
export { Content }