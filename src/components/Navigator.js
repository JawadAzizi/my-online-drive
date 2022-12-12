function Navigator(props){
    return(
        <div id = 'navigator' className="navigator">
            {/* the path to current folder */}
            <h4>{
                props.path.map(element => element + '>')
            }</h4>
            <hr style={{'padding': '0px', 'margin': '0px', borderWidth: '0.5px'}} />
        </div>
    )
}

export default Navigator