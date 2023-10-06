import { Tours } from '@/modules/tours';
import { toursPageMetadata } from '@/shared/consts/seo/metadata';

export const metadata = toursPageMetadata


function Page() {
	return <Tours />
}

export default Page