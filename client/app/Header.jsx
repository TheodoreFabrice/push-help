import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

export default class Header extends React.Component {

    render() {
        return (

            <div className="pos-f-t sticky-top">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">Collapsed content</h4>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark ">
                    <div className="row">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <form className="form-inline my-2 my-lg-0">

                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                        </form>
                    </div>
                </nav>
            </div>

        );
    }
}