import './app.css'
import Header from './projects/drive/components/Header'
import SideBar from './projects/drive/components/SideBar'
import FolderPrev from './projects/drive/components/FolderPrev'
import FilePrev from './projects/drive/components/FilePrev'
import Container from './projects/drive/components/Container'
import Navigator from './projects/drive/components/Navigator'
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

