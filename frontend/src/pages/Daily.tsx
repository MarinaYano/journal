import { useEffect, useState } from "react"
import { getDaily } from "../api/getDaily"
import DailyContent from "../components/DailyContent"

export type DailyType = {
  id: string
  date: string
  evaluation: string
}

const Daily = () => {
  const [daily, setDaily] = useState<DailyType[]>([{
    id: '',
    date: '',
    evaluation: '',
  }]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDaily()
      .then(d => {
        setDaily(d)
        setIsLoading(false)
      })
      .catch(e => { throw new Error(e)} )
  }, [])

  console.log(daily)

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {daily.map( d => <DailyContent key={d.id} daily={d} /> )}
        </div>
      )}
    </div>
  )
}

export default Daily