import React from 'react';
import mainImage from '../images/nature-autumn-stock.jpg'
import {Card, CardMedia, CardTitle} from "material-ui";

export default class Home extends React.Component {

    bannerStyle = {
        height: 550,
    };

    render() {
        return (
            <div>
                <Card>
                    <CardMedia overlay={<CardTitle title="Where will your dreams take you?"/>}>
                        <img src={mainImage} alt="" style={this.bannerStyle}/>
                    </CardMedia>
                </Card>

            </div>
        );
    }
}