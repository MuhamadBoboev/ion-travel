
export interface Props {
	searchingResultsItems: SearchingResultsItem[]
	filter: Filter
}
interface Filter {
	filterTags: FilterTags[]
	sortItems: SortItem[]
	filterResult: number
}
interface FilterTags {
	name: string
	teg: string
}
interface SortItem {
	name: string
}

interface SearchingResultsItem {
	name: string
	img: string
	text: string
	link: string
	tags: Tags[]
}

interface Tags {
	name: string
	img: string
}
