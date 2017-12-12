/** Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.min.js';



/** Polyfills */
import 'babel-polyfill';
import 'whatwg-fetch';

import React    from 'react';
import ReactDOM from 'react-dom';

import Header       from './Header';
import MovieList    from './MovieList';
import Announcement    from './Announcement';

export default class App extends React.Component {

    render() {
        return (

            <div>
                <Header/>
                <div className="container">


                    <div className="row">
                        <div className="card-columns col-md-10" >
                            <Announcement title="Recherche garde enfant" detail="Urgent: recherche garde pour ce soir Sierck les bains" distance="50" price="150"></Announcement>
                            <Announcement title="Recherche garde enfant" detail="Urgent: recherche garde pour ce soir Sierck les bains" distance="50" price="150"></Announcement>
                            <Announcement title="Recherche garde enfant" detail="Urgent: recherche garde pour ce soir Sierck les bains" distance="50" price="150"></Announcement>
                            <Announcement title="Recherche garde enfant" detail="Urgent: recherche garde pour ce soir Sierck les bains" distance="50" price="150"></Announcement>

                        </div>
                        <div className="col-md-2" >
                            colonne de droite
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
