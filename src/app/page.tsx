import { Wrapper } from '@/shared/ui/Wrapper'
import { Banner } from '@/widgets/Banner'
import Image from 'next/image'

export default function Home() {
	return (
		<Wrapper>
			<Banner />
			<h1>Main content</h1>
		</Wrapper>
	)
}
