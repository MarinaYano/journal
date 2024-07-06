import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDailyDetail } from "../api/getDaily"
import CategoryList from "../components/CategoryList"

type DailyDetailType = {
  date: string
  univ: string
  study: string
  other: string
  new: string
  wanna: string
  summary: string
}

const initialState = {
  date: '',
  univ: '',
  study: '',
  other: '',
  new: '',
  wanna: '',
  summary: '',
}

const DailyDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<DailyDetailType>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if(id) {
      getDailyDetail(id)
      .then(d => {
        setDetail(d)
        setIsLoading(false)
      })
      .catch(e => { throw new Error(e)} )
    }
  }, [])

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-slate-400">{detail.date}</h1>
          <div>
            <h2 className="mt-8 text-xl font-semibold">University</h2>
            <p>{detail.univ || ''}</p>
          </div>
         <div>
          <h2 className="text-xl font-semibold">Study</h2>
          <p>{detail.study}</p>
         </div>
          <div>
            <h2 className="text-xl font-semibold">Other</h2>
            <p>{detail.other}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">New</h2>
            <p>{detail.new}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What I wanna do</h2>
            <p>{detail.wanna}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Summary</h2>
            <p>{detail.summary}</p>
          </div>
        </div>
      )}
      <CategoryList />
    </div>
  )
}

export default DailyDetail