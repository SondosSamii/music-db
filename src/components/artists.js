import { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

document.title = "Music DB";

export default class Artists extends Component {
    constructor() {
        super();

        this.baseURL = "https://my-json-server.typicode.com/sondossamii/music-db/artists";
        
        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        fetch(this.baseURL, {method: 'GET'})
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                this.setState({artists: data});
            })
            .catch(err=>{
                console.log(err);
            })
    }

    renderArtists({artists}) {
        if(artists && artists.length > 0) {
            return artists.map((artist)=>{
                return (
                   <div className="col-12 col-md-6 col-lg-4 p-2" key={artist.id}>
                       <div className="box">
                           <img className="img-fluid"
                               src={`/images/covers/${artist.cover}.jpg`}
                               alt={`${artist.name} Cover`}/>
                           <button className="btn btn-primary rounded-pill box-btn">
                               <Link to={`artist/${artist.id}`}
                                   style={{color: '#fff'}}>{artist.name}</Link>
                           </button>
                       </div>
                   </div>
                )
            })
        }
        return (
            <h2>There's a problem with Database</h2>
        )
    }

    render() { 
        return (
        <div className="text-center py-5">
             <h1>Browse The Artists</h1>
             <div className="container pt-3">
                 <div className="row justify-content-center">
                     {this.renderArtists(this.state)}
                 </div>
             </div>
        </div>
        );
    }
}