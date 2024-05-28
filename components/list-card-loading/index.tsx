import SkeletonCard from '../skeleton-card'

export default function ListCardLoading({ length }: { length: number }) {
  const componentsArray = Array.from({ length })
  return (
    <div className="grid grid-flow-col">
      {componentsArray.map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
}
