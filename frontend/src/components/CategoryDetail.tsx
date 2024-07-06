import { CategoryType } from "../pages/CategoryView"

type CategoryDetailType = {
  detail: CategoryType
}

const CategoryDetail = ({ detail }: CategoryDetailType) => {
  return (
    <div>
      {detail.date && (
        <div>
          <h2 className="text-xl font-semibold">{detail.date}</h2>
          <p>{detail.content}</p>
        </div>
      
      )}
    </div>
  )
}

export default CategoryDetail