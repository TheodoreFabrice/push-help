import React from 'react';
import './Announcement.css';
import PropTypes from 'prop-types';

export default class Announcement extends React.Component {

    static defaultProps = {
        type : 'info'
    };
    static propTypes = {
        title : PropTypes.string.isRequired,
        detail    : PropTypes.string,
        price : PropTypes.number,
        distance : PropTypes.number
    };

    render() {
        return (


            <div className="card mb-5" style={{width: "300px"}}>
                <img className="card-img-top"  src="img/residentevil.jpg" alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}
