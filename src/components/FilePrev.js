function FilePrev(props){
    return (
        <div className="doc-prev">
            {props.img&&
            <div className="doc-prev-img">
                {/* the preview image */}
                <img src={props.img} />
            </div>
            }
            
            <div className="doc-prev-info">
                {/* file details  */}
                <h4>{props.name}</h4>
            </div>
        </div>
    )
}

export default FilePrev