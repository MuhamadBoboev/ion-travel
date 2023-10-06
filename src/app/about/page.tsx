import { aboutPageMetadata } from '@/shared/consts/seo/metadata';
import { About } from '@/modules/about';

export const metadata = aboutPageMetadata

function Page() {
	return <About />
}

export default Page