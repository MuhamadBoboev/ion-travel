import { Wrapper } from '@/shared/ui/Wrapper'
import { Banner } from '@/widgets/Banner'
import { Gallery } from '@/widgets/Gallery'
import { Timeline } from '@/widgets/Timeline'
import { Advertising } from '@/widgets/Advertising'
import { Content } from '../Content'

function Tour() {
	return (
		<Wrapper>
			<Banner
				subtitle='Лови момент! Открой Таджикистан для себя'
				title='Памятка, турсту про нас и не только'
				// tabs={[{ name: 'Туры по Таджикистану', link: 'tours', active: true }, { name: 'Места для развлечений', link: 'entertainment', active: false }]}
				text='Ты пройдёшь по скрытым от общих глаз улочкам, завернешь в самые колоритные местные дворики, узнаешь об истории города через игру.'
			// button={{ name: 'Поехали!', link: 'sadasd' }}
			/>
			<Content />
			<Advertising />
			<Timeline />
			<Gallery />
		</Wrapper>
	)
}

export { Tour }