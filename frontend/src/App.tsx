import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Daily from './pages/Daily'
import DailyDetail from './pages/DailyDetail'
import CategoryView from './pages/CategoryView'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/daily' element={<Daily />} />
            <Route path='/daily/:id' element={<DailyDetail />} />
            <Route path='/daily/category/:cat' element={<CategoryView />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
