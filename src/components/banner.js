const bgStyle = {
    width: '100%',
    height: '100%',
    background: 'url(/images/cover.png) center no-repeat',
    backgroundSize: 'cover'
}

const Banner = ()=> {
    return (
        <div style={{width: '100%', height: '100vh'}}>
            <div style={bgStyle}>
                <div className="row justify-content-center align-items-center w-100 h-100">
                    <h1 className="music-db-header">MUSIC-DB</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner