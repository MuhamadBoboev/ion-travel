import { MainPage } from '@/modules/main-page'
import { mainPageMetadata } from '@/shared/consts/seo/metadata';

export const metadata = mainPageMetadata

export default function Home() {
	return (
		<MainPage />
	)
}
