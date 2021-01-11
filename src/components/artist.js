import {useState, useEffect} from 'react'
import Albums from './albums';

const Artist = ({ match })=> {
    // eslint-disable-next-line
    const [artist, setArtist] = useState({});
    const baseURL = `http://localhost:3500/artists/${match.params.id}`;

    useEffect(()=>{
        fetch(baseURL, {method: 'GET'})
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            // console.log(data);
            setArtist(data);
            // console.log(artist);
        })
        .catch(err=>{
            console.log(err);
        })
        // eslint-disable-next-line
    }, []);

    const renderArtist = (artist)=> {
        if(artist.id) {
            return (
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-md-5">
                        <div className="box">
                            <img className="img-fluid"
                                src={`/images/covers/${artist.cover}.jpg`}
                                alt={`${artist.name} Cover`}/>
                        </div>
                    </div>
                    <div className="col-10 col-md-7 col-lg-5">
                        <h1>{artist.name}</h1>
                        <p>{artist.bio}</p>
                    </div>
                </div>
            )
        }
        return (
            <div>No artist</div>
        )
    }

    return(
        <div className="text-center">
            <h1 className="music-db-header py-2"
                style={{color: '#777', borderBottom: '1px solid #000099'}}>
                    Music db</h1>
            <div className="container pt-3">
                {renderArtist(artist)}
            </div>
        </div>
    )
}

export default Artist;