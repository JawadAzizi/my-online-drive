import Navigator from "./Navigator"

// for holding any things for viewing in the main section
function Container(props){
    return(
        <div>
            {/* hold the path to open folder */}
            <Navigator />
            <h1>Hellow this is main </h1>
        </div>
    )
}

export default Container