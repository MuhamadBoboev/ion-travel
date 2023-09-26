'use client'
import { Typography } from '@/shared/ui/Typography'
import classes from './gallery.module.scss'
import Link from 'next/link'
import { GaleryDate } from './Galery'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { HandySvg } from 'handy-svg'

function Gallery() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.info_block} >
				<SectionTitle className={classes.section_title}>
					Галерея эмоций которыми мы поделимся
				</SectionTitle>
				<Typography className={classes.info_text} size='xl' >
					Добро пожаловать в Таджикистан! Страна в Центральной Азии с богатой
					историей и культурой! Проводя миролюбивую политику открытых дверей и
					поддерживая дружественные отношения со странами региона.
				</Typography>
				<div className={classes.button_block}>
					<Link href='go' className={classes.link_button} >
						<p>Поехали</p>
					</Link>
				</div>
			</div>
			<ul className={classes.items}>
				{GaleryDate.map((el) =>
					<li key={el.author} className={classes.item}>
						<Link href={el.link} className={classes.item_body} >
							<div className={classes.item_info}>
								<div className={classes.item_text_block}>
									<Typography className={classes.item_text} size='s'>
										{el.author}
									</Typography>
									<Typography className={classes.item_text} size='l'>
										{el.location}
									</Typography>
								</div>
								<HandySvg
									src='/assets/icons/handle.svg'
									width={48}
									height={48}
									alt='handle'
								/>
							</div>
							<div className={classes.block_img} >
								<img src={el.img} width={344} height={260} alt={el.location} />
							</div>
						</Link>
					</li>)}
			</ul>
		</div>
	)
}
export { Gallery }