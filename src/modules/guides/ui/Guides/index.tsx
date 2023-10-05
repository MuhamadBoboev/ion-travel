import { Content } from '../Content'
import classes from './guides.module.scss'
import { Gallery } from '@/widgets/Gallery'
import { AboutProject } from '@/widgets/AboutProject'
import { Wrapper } from '@/shared/ui/Wrapper'
import { Banner } from '@/widgets/Banner'
function Guides() {
	return (
		<Wrapper>
			<Banner
				subtitle='Лови момент! Открой Таджикистан для себя'
				title='Памятка, турсту про нас и не только'
				text='Ты пройдёшь по скрытым от общих глаз улочкам, завернешь в самые колоритные местные дворики, узнаешь об истории города через игру.' >
				<Content />
			</Banner>
			<Gallery />
			<AboutProject />
		</Wrapper>
	)
}
export { Guides }