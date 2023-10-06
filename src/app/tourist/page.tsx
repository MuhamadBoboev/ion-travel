import { Tourist } from "@/modules/tourist"
import { touristPageMetadata } from "@/shared/consts/seo/metadata"

export const metadata = touristPageMetadata

function Page() {
	return (
		<Tourist />
	)
}
export default Page