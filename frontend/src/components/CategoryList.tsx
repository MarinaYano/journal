import { categoryList } from '../constants'
import { Link } from 'react-router-dom'

const CategoryList = () => {
  return (
    <div className='my-8 flex justify-center'>
      <ul className='flex gap-x-6 text-slate-400'>
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