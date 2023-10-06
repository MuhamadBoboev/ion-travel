import { Guides } from '@/modules/guides';
import { guidesPageMetadata } from '@/shared/consts/seo/metadata';

export const metadata = guidesPageMetadata


function Page() {
	return <Guides />
}

export default Page