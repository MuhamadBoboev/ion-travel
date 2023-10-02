import { Gallery } from '@/widgets/Gallery'
import classes from './tours.module.scss'
import { AboutProject } from '@/widgets/AboutProject'
import { Wrapper } from '@/shared/ui/Wrapper'
import { Banner } from '@/widgets/Banner'
import { Content } from '../Content'


function Tours() {
	return (
		<Wrapper>
			<Banner
				subtitle='Лови момент! Открой Таджикистан для себя'
				title='Эмоции, которыми ты захочешь делиться'
				tabs={[{ name: 'Туры по Таджикистану', link: 'tours', active: true }, { name: 'Места для развлечений', link: 'entertainment', active: false }]}
				text='Ты пройдёшь по скрытым от общих глаз улочкам, завернешь в самые колоритные местные дворики, узнаешь об истории города через игру.'
				button={{ name: 'Поехали!', link: 'sadasd' }}
			/>
			<Content />
			<Gallery />
			<AboutProject />
		</Wrapper>
	)
}

export { Tours }