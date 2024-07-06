import { Link } from "react-router-dom"
import { DailyType } from "../pages/Daily"

type DailyContentType = {
  daily: DailyType
}
const DailyContent = ({ daily }: DailyContentType) => {
  return (
    <div>
      <Link to={`${daily.id}`}>
        <h1>{daily.date}</h1>
      </Link>
    </div>
  )
}

export default DailyContent