import { Entertainment } from "@/modules/entertainment"
import { entertainmentPageMetadata } from "@/shared/consts/seo/metadata"

export const metadata = entertainmentPageMetadata

function Page() {
	return (
		<Entertainment />
	)
}
export default Page