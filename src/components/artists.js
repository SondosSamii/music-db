import { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

export default class Artists extends Component {
    constructor() {
        super();

        this.baseURL = "http://localhost:3500/artists";
        
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
                // console.log(data);
                this.setState({artists: data});
                // console.log(this.state.artists);
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
                       <div className="artistBox">
                           <img className="img-fluid"
                               src={`/images/covers/${artist.cover}.jpg`}
                               alt={`${artist.name} Cover`}/>
                           <button className="btn btn-primary rounded-pill artistBtn">
                               <Link to={`artist/${artist.id}`}
                                   style={{color: '#fff'}}>{artist.name}</Link>
                           </button>
                       </div>
                   </div>
                )
            })
        }
        return (
            <h1>No Artists</h1>
        )
    }

    render() { 
        return (
        <div className="bg text-center py-5">
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