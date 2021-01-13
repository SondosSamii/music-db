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
                <div className="row justify-content-center align-items-center w-100 h-25">
                    <h1 className="music-db-header">MUSIC-DB</h1>
                </div>
                <div className="row justify-content-center align-items-center w-100 h-50">
                    <h1>
                        <a href="https://github.com/SondosSamii"
                            className="text-white">Sondos Sami Abuzeid
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Banner