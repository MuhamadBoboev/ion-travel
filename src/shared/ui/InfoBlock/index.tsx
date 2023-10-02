import { HandySvg } from 'handy-svg'
import classes from './info-block.module.scss'
import { Tags } from '../Tags'
import { useState } from 'react'
import clsx from 'clsx'

interface Props {
	item: Item
}
interface Item {
	id: number
	title: string
	img: string
	text: string
	tags: Tag[]
}
interface Tag {
	name: string
	img: string
	id: number
}

function InfoBlock({ item }: Props) {
	const [active, setActive] = useState<Boolean>(false)
	return (
		<>
			<div className={clsx(
				classes.item_body,
				active && classes.active
			)} >
				<div className={classes.item_top} onClick={() => setActive(!active)} >
					<h3 className={classes.title} >
						{item.title}
					</h3>
					<HandySvg className={classes.arrow_svg} src='/assets/icons/arrow-down.svg' width={32} height={32} alt={item.title} />
				</div>
				<div className={clsx(
					classes.body,
					active && classes.active
				)} >
					<div className={classes.item_img} >
						<img src={item.img} width={640} height={640} alt={item.title} />
					</div>
					<div className={classes.item_info} >
						<div className={classes.item_text}>
							<p className={classes.text} >
								{item.text}
							</p>
						</div>
						<div className={classes.item_tags}>
							<Tags tags={item.tags} />
						</div>
					</div>
				</div>
			</div>
		</>)
}
export { InfoBlock }