import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

export default class Header extends React.Component {

    render() {
        return (

            <div id="nav">
                <div className="navbar navbar-inverse navbar-fixed-top" data-spy="affix" data-offset-top="100">
                    <div className="container" >

                        <ul className="nav pull-left" id="searchZone" style={{marginRight:"5px"}}>
                            <input type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="basic-addon1" />
                        </ul>


                        <div className="navbar-collapse collapse" id="searchZone">
                            <ul className="nav navbar-nav">
                                <button type="button" className="btn btn-primary" style={{marginRight:"5px"}}>Recherche avancée</button>
                                <button type="button" className="btn btn-success">Nouvelle annonce</button>
                            </ul>
                            <ul className="nav pull-right navbar-nav" id="topDiv">
                                <li>
                                    <a href="#">Fabrice</a>
                                </li>
                                <li>
                                    <a href="#"><span className="badge">2</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}