import Navigator from "./Navigator"
import FilePrev from "./FilePrev"
import FolderPrev from "./FolderPrev"

// for holding any things for viewing in the main section
function Container(props){
    const prevs = props.showContent.content.map(file => {
        return (
            <div className = 'content-prev'>
                {
                    file.isFolder? <FilePrev name = {file.name} />
                    : <FolderPrev name = {file.name} />
                }
            </div>
        )
    })
    return(
        <div id="container" className="container">
            {/* hold the path to open folder */}

            <Navigator path={props.showContent.location} />
            <div style = {{display: 'flex', flexDirection:'row'}}>
                {prevs}
            </div>
            
        </div>
    )
}

export default Container