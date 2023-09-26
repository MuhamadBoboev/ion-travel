import { Typography } from '@/shared/ui/Typography'
import classes from './about-project.module.scss'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import Link from 'next/link'
import { AboutProjectDate } from './AboutProjectDate'
import { Form } from './Form'


function AboutProject() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.left} >
				<div className={classes.info_left} >
					<Typography size='m' >
						Таджикистан место где отдыхают душой и телом
					</Typography>
				</div>
			</div>
			<div className={classes.right} >
				<div className={classes.info} >
					<div className={classes.info_center} >
						<SectionTitle className={classes.info_center_title}>
							Немного о нашем проекте
						</SectionTitle>
						<Link href='asd' className={classes.info_button}>
							<Typography size='m'>
								Все наши туры
							</Typography>
						</Link>
					</div>
					<div className={classes.info_right} >
						<Typography size='l' >
							Мы знаем, что у Вас есть выбор — благодарим, что выбрали нас!
							<br />
							<br />
							Изначально, iontravel задумывалось как высокотехнологичное туристическое агентство, использующее в своей работе новейшие IT программы и технологии в сфере туризма для наилучшего и оперативного обслуживания наших клиентов.
							<br />
							<br />
							Сегодня iontravel – одно из наиболее надежных и компетентных туристических агентств Душанбе.
						</Typography>
					</div>
				</div>
				<ul className={classes.items} >
					{AboutProjectDate.map((el =>
						<li className={classes.item} key={el.name} >
							<div className={classes.item_body} >
								<Typography className={classes.item_text} size='xl' >
									{el.name}
								</Typography>
								<SectionTitle className={classes.item_title}>
									{el.statistics}
								</SectionTitle>
							</div>
						</li>
					))}

				</ul>
				<Form />
			</div>
		</div>
	)
}
export { AboutProject }