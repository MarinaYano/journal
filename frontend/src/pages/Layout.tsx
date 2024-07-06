import { Outlet } from "react-router-dom"
import Header from "../components/layout/Header"

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="mt-20 w-96 sm:w-10/12 sm:max-w-5xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout