import { tourPageMetadata } from '@/shared/consts/seo/metadata';
import { Tour } from '@/modules/tour';

export const metadata = tourPageMetadata


function Page() {
	return <Tour />
}

export default Page