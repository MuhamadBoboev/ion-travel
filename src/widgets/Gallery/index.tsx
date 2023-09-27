'use client'
import { Typography } from '@/shared/ui/Typography'
import classes from './gallery.module.scss'
import Link from 'next/link'
import { GaleryDate } from './Galery'
import { SectionTitle } from '@/shared/ui/SectionTitle'
// import { HandySvg } from 'handy-svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
									<Typography className={classes.text_1} size='s'>
										{el.author}
									</Typography>
									<Typography className={classes.text_2} size='l'>
										{el.location}
									</Typography>
								</div>
								{/* <HandySvg
									src='/assets/icons/handle.svg'
									width={48}
									height={48}
									alt='handle'
								/> */}
							</div>
							<div className={classes.block_img} >
								<img src={el.img} width={344} height={260} alt={el.location} />
							</div>
						</Link>
					</li>)}
			</ul>
			<Swiper
				modules={[A11y]}
				spaceBetween={10}
				slidesPerView={1.1}
				className={classes.slider}
			>
				{GaleryDate.map((el) =>
					<SwiperSlide key={el.author} className={classes.sl_item}>
						<Link href={el.link} className={classes.item_body} >
							<div className={classes.item_info}>
								<div className={classes.item_text_block}>
									<Typography className={classes.text_1} size='s'>
										{el.author}
									</Typography>
									<Typography className={classes.text_2} size='l'>
										{el.location}
									</Typography>
								</div>
							</div>
							<div className={classes.block_img} >
								<img src={el.img} width={344} height={260} alt={el.location} />
							</div>
						</Link>
					</SwiperSlide>)}
			</Swiper>
			<Link href='asd' className={classes.show_all} >
				Все фотографии
			</Link>
		</div>
	)
}
export { Gallery }