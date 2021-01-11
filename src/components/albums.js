const Albums = ({albums})=> {
    // console.log(albums);
    return(
        <div className="row justify-content-center">
            {albums.map((album)=>{
                return (
                    <div key={album.albumId} className="col-6 col-lg-5 p-2">
                        <div className="box">
                            <img className="img-fluid w-100"
                                src={`/images/albums/${album.cover}.jpg`}
                                alt={`${album.title} Album Cover`}/>
                            <div className="album-details">
                                <h2>Album</h2>
                                <h3>{album.title}</h3>
                                <h4>Year: {album.year}</h4>
                                <h5>Price: {album.price}</h5>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Albums;