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
        <div>
          <h1>{detail.date}</h1>
          <h2>University</h2>
          <p>{detail.univ}</p>
          <h2>Study</h2>
          <p>{detail.study}</p>
          <h2>Other</h2>
          <p>{detail.other}</p>
          <h2>New</h2>
          <p>{detail.new}</p>
          <h2>What I wanna do</h2>
          <p>{detail.wanna}</p>
          <h2>Summary</h2>
          <p>{detail.summary}</p>
        </div>
      )}
      <CategoryList />
    </div>
  )
}

export default DailyDetail