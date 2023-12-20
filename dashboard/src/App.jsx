import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import './assets/css/app.css'

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar/>
          <div className="container-fluid">
            <Outlet/>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default App
