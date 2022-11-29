function FilePrev(props){
    return(
        <div className="doc-prev">
            <div className="doc-prev-img">
                {/* the preview image */}
                <img src={props.img} />
            </div>
            <div className="doc-prev-info">
                {/* file details  */}
                <p>file details</p>
            </div>
        </div>
    )
}

export default FilePrev