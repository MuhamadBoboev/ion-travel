import { Wrapper } from "@/shared/ui/Wrapper"
import { AboutProject } from "@/widgets/AboutProject"
import { Banner } from "@/widgets/Banner"
import { Gallery } from "@/widgets/Gallery"
import { Content } from "../Content"

function Entertainment() {
	return (
		<>
			<Wrapper>
				<Banner
					subtitle='Лови момент! Открой Таджикистан для себя'
					title='Места, в которых вы должны побывать'
					tabs={[{ name: 'Туры по Таджикистану', link: 'tours', active: false }, { name: 'Места для развлечений', link: 'entertainment', active: true }]}
					text='Ты пройдёшь по скрытым от общих глаз улочкам, завернешь в самые колоритные местные дворики, узнаешь об истории города через игру.'
				// button={{ name: 'Поехали!', link: 'sadasd' }} 
				/>
				<Content />
				<Gallery />
				<AboutProject />
			</Wrapper>
		</>
	)
}

export { Entertainment }