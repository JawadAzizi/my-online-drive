import FolderPrev from "./FolderPrev"
import React from "react"
import FilePrev from "./FilePrev"
import { HashRouter } from "react-router-dom"

function SideBar(props){

    const [file, setFile] = React.useState({"show": true , "files": props.content.filter(f => !f.isFolder) })
    const [folder, setFolder] = React.useState({"show": true , "folders": props.content.filter(f => f.isFolder)})

    React.useEffect(()=>{
        setFile(prev =>{
            return {show: prev.show, "files": props.content.filter(f => !f.isFolder) }
        })
        setFolder(prev =>{
            return {show: prev.show, "folders": props.content.filter(f => f.isFolder)}
        })
    },  [props])
    
    const toggleFile = () =>{
        setFile(prev => {return {...file, show:!prev.show}})
        props.handleShow({location : ['Home', 'Files'], content:file.files})
    }
    const toggleFolder = () =>{
        setFolder(prev =>{return {...folder, show:!prev.show}})
        props.handleShow({location: ['Home', 'Folders'], content: folder.folders})
    }

const files = (
    <div>
        <div onClick={toggleFile} >Files</div>
        {
            file.show && file.files.map(f => <FilePrev name = {f.name}  />)
        }
    </div>
)
const folders = (
    <div>
        <div onClick={toggleFolder} >Folder</div>
        {
            folder.show && folder.folders.map(f => <FolderPrev name ={f.name} />)
        }

    </div>
)

    return(
        <div className="side-bar">
            <header className="side-bar-header">
                <h2>Documents</h2>
            </header>
            <ul className="side-bar-list">
                <li>
                    {/* list of folders as FolderPrev */}
                    {files}
                    {folders}
                </li>
            </ul>
        </div>
    )
}

export default SideBar