'use client'

import Link from 'next/link'
import classes from './tours.module.scss'
import { HandySvg } from 'handy-svg'
import { ToursDate } from './Tours'

interface Props {
	name: string
	link?: string
	img: string
}
function Tours() {
	return (
		<ul className={classes.tours}>
			{ToursDate.map(el => (
				<li key={el.name} className={classes.tour}>
					<Link href={el.link} className={classes.body} >
						<div className={classes.link}>
							<p className={classes.text} >
								{el.name}
							</p>
							<HandySvg
								className={classes.arrow}
								src='/assets/icons/arrow.svg'
								width={32}
								height={32}
								alt='arrow'
							/>
						</div>
						<div className={classes.block_img} >
							<img src={el.img} />
							<div className={classes.shadow} ></div>
						</div>
					</Link>
				</li>
			)
			)}
		</ul>
	)
}
export { Tours }