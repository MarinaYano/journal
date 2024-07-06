import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCategory } from "../api/getDaily";
import CategoryDetail from "../components/CategoryDetail";

export type CategoryType = {
  date: string
  content?: string
}

const CategoryView = () => {
  const { cat } = useParams();
  const [category, setCategory] = useState<CategoryType[]>([{
    date: '',
  }]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if(cat) {
      getCategory(cat)
        .then( c => {
          setCategory(c)
          setIsLoading(false)
        })
        .catch(e => { throw new Error(e) })
    }
  }, [cat])

  let title: string = '';

  switch(cat) {
    case 'univ':
      title = 'University';
      break;
    case 'study':
      title = 'Study';
      break;
    case 'other':
      title = 'Other';
      break;
    case 'new':
      title = 'New';
      break;
    case 'wanna':
      title = 'Wanna';
      break;
    default:
      title = 'Summary';
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-slate-400">{title}</h1>
          {category.map((item) => (
            <CategoryDetail key={item.date} detail={item} />
          ))}
        </div>
      
      )}
    </div>
  )
}

export default CategoryView