import { HandySvg } from 'handy-svg'
import classes from './tour.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { Tags } from '../Tags'

interface Props {
	tour: Tour
}
interface Tour {
	name: string
	img: string
	text: string
	link: string
	tags: Tag[]
}

interface Tag {
	name: string
	img: string
	id: number
}
function Tour({ tour }: Props) {
	return (
		<Link href={tour.link} className={clsx(
			classes.item
		)} key={tour.name}>
			<div className={classes.body} >
				<div className={classes.title_block}>
					<p className={classes.title} >{tour.name}</p>
				</div>
				<div className={classes.img_block} >
					<img src={tour.img} alt={tour.name} width={288} height={200} />
				</div>
				<div className={classes.info_info_block} >
					<div className={classes.info_block}>
						<div className={classes.info_text_block} >
							<div className={classes.title_block_mobile}>
								<p className={classes.title} >{tour.name}</p>
							</div>
							<p className={classes.info_text} >
								{tour.text}
							</p>
						</div>
						<div className={classes.tags_block} >
							<Tags tags={tour.tags} />
						</div>
					</div>
				</div>
			</div>
			<HandySvg className={classes.info_svg} src='/assets/icons/arrow_up_right_s.svg' width={32} height={32} alt='arrow' />
		</Link>
	)
}
export { Tour }