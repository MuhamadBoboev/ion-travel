import classes from './info-block-locate.module.scss'
import { useState } from 'react'
import clsx from 'clsx'
import { Tags } from '@/shared/ui/Tags'

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

function InfoBlockLocate({ item }: Props) {
	const [active, setActive] = useState<Boolean>(false)
	return (
		<>
			<div className={classes.item_body} >
				<div className={classes.item_top} >
					<h3 className={classes.title} >
						{item.title}
					</h3>
				</div>
				<div className={classes.body} >
					<div className={classes.item_img} >
						<img src={item.img} width={640} height={640} alt={item.title} />
					</div>
					<div className={classes.item_info} >
						<div className={classes.item_text}>
							<h3 className={clsx(classes.title,
								classes.title_desktop)} >
								{item.title}
							</h3>
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
export { InfoBlockLocate }