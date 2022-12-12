import React from 'react'
import './app.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import FolderPrev from './components/FolderPrev'
import FilePrev from './components/FilePrev'
import Container from './components/Container'
import Navigator from './components/Navigator'
import NotFound from './components/NotFound'
import Splitter from 'm-react-splitters'
// import Split from 'split.js'
import Split from 'react-split'
import {Route,Routes, Link, BrowserRouter} from 'react-router-dom'


function App(){
    const [showContent , setShowContent] = React.useState({location: ['Home'], content: []})

    //each element within the content has selected and url properties and shold be requested from server
    const [content, setContent] = React.useState([])
    
    console.log("contetn", content)
    React.useEffect(()=>{
        const response = async ()=>{
            await fetch('./data.json')
            .then(res => res.json())
            .then(data => setContent(data.content))
        }
        response()
    }, [])

    
    const handleClick = ()=>{

    } 

    const handleShow = (con)=>{
        console.log('showne content', con)
        setShowContent({...con})

    }
    
    return (
        <div>
            <BrowserRouter >
                <Routes>
                    <Route  path = "/" element={
                        <div>
                            <Header />
                            
                            <div style ={{display : 'flex', flexDirection :'row'}}>
                                <Split  
                                    sizes={[20, 80]}
                                    className='split'
                                    direction='horizontal'
                                    gutterAlign='start'
                                    gutterSize={5}
                                >
                                    <SideBar handleShow = {handleShow} content = {content}/>
                                    <Container  showContent = {showContent}/>
                                </Split>
                            </div>
                        </div>
                    } />
                    {/* not found */}
                    <Route path = "*" element = {<NotFound message='May be invalid request' />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

