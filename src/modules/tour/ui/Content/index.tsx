'use client'
import { WrapperContent } from '@/shared/ui/WrapperContent'
import classes from './content.module.scss'
import { TourTabs } from '@/shared/ui/TourTabs'
import { TourTabsItems } from '../../consts/TourTabsItems'
import { HandySvg } from 'handy-svg'
import { InfoBlockDate } from '../../consts/InfoBlock'
import { InfoBlock } from '../InfoBlock'

function Content() {
	return (
		<WrapperContent
			header={
				<TourTabs items={TourTabsItems} />
			}>
			<div className={classes.main_body} >
				<ul className={classes.items}>
					<li className={classes.item} key={InfoBlockDate.id}>
						<InfoBlock item={InfoBlockDate} />
					</li>
				</ul>
			</div>
		</WrapperContent>)
}
export { Content }