import {useState, useEffect} from 'react'
import { NavLink as Link } from 'react-router-dom';

import Albums from './albums';

const Artist = ({ match })=> {
    // eslint-disable-next-line
    const [artist, setArtist] = useState({});
    const baseURL = `https://my-json-server.typicode.com/sondossamii/music-db/artists/${match.params.id}`;

    useEffect(()=>{
        fetch(baseURL, {method: 'GET'})
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setArtist(data);
        })
        .catch(err=>{
            console.log(err);
        })
        // eslint-disable-next-line
    }, []);

    const renderArtist = (artist)=> {
        document.title = "Artist";
        if(artist.id) {
            return (
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-md-5">
                        <div className="box">
                            <img className="img-fluid"
                                src={`/images/covers/${artist.cover}.jpg`}
                                alt={`${artist.name} Cover`}/>
                        </div>
                    </div>
                    <div className="col-10 col-md-7 col-lg-5">
                        <h1>{artist.name}</h1>
                        <p className="text-left">{artist.bio}</p>
                    </div>
                    <div className="col-10 col-md-8 py-2">
                        <Albums key={artist.id} albums={artist.albums}/>
                    </div>
                </div>
            )
        }
        return (
            <h1 className="text-center pt-3">No Artists with this ID <Link to='/'>Go to Home</Link></h1>
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