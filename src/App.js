import './app.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import FolderPrev from './components/FolderPrev'
import FilePrev from './components/FilePrev'
import Container from './components/Container'
import Navigator from './components/Navigator'
import {Route,Routes, Link, BrowserRouter} from 'react-router-dom'

function App(){
    return (
        <div>
            <div>helow 1</div>
            <BrowserRouter >
                <Routes>
                    <Route  path = "/" element={
                        <div>
                            <Header />
                            <SideBar />
                            <Container />
                        </div>
                    } />
                    {/* not found */}

                    <Route path = "*" element = {(<div>hellow world</div>)} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

