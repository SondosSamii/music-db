const Albums = ({albums})=> {
    // console.log(albums);
    return(
        <div className="row justify-content-center">
            {albums.map((album)=>{
                return (
                    <div key={album.albumId} className="col-md-5 p-2">
                        <div className="box">
                            <img className="img-fluid"
                                src={`/images/albums/${album.cover}.jpg`}
                                alt={`${album.title} Cover`}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Albums;