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
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-block">
                            <h4 className="card-title">{this.props.title}</h4>
                            <p className="card-text">{this.props.detail}</p>
                            <div className="row lastLine">
                                <div className="col-md-4">
                                    <a href="#" className="btn btn-primary">Détail</a>
                                </div>
                                <div className="col-md-4" style={{padding: "5px"}}>
                                    {this.props.price} euros
                                </div>
                                <div className="col-md-4" style={{padding: "5px"}}>
                                    {this.props.distance} kilomètres
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-img-bottom" style={{background: "url('img/residentevil.jpg')" }}/>
                    </div>
                </div>
            </div>
        );
    }
}