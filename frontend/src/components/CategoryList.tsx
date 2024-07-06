import { categoryList } from '../constants'
import { Link } from 'react-router-dom'

const CategoryList = () => {
  return (
    <div>
      <ul>
        {categoryList.map((item) => (
          <li key={item.category}>
            <Link to={`${item.link}`}>{item.category}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList