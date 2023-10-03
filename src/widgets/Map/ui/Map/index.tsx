'use client'
import { Wrapper } from '@/shared/ui/Wrapper'
import classes from './map.module.scss'
import { Dot } from '../Dot'
import { Dots } from '../../consts/Dots'
import { useState } from 'react'

function Map() {
	const [active, setActive] = useState({ id: 10 })
	return (
		<Wrapper>
			<div className={classes.wrapper} >
				<div className={classes.bl_img}>
					<img className={classes.img} src='/assets/img/map.svg' useMap='#workmap' width={1448} height={1012} />
					<div className={classes.items} >
						{Dots.map(({ id, top, left }) =>
							<Dot key={id} top={top} left={left} />
						)}
					</div>
				</div>
			</div>
		</Wrapper>
	)
}
export { Map }