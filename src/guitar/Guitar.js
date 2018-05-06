import React from 'react';
import {Card, CardText, CardTitle, GridList, GridTile} from "material-ui";
import bandImage from '../images/guitar-band.jpg'
import guitarImage from '../images/guitar-smile.jpg'
import guitarSolo from '../images/guitar-solo.jpg'

export default class Guitar extends React.Component {

    styles = {
        gridList: {
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
        },
        titleStyle: {
            color: 'rgb(0, 188, 212)',
        },
        leftJustified: {
            textAlign: 'left'
        }
    };

    tilesData = [
        {
            img: bandImage,
            title: 'Grateful Red',
        },
        {
            img: guitarImage,
            title: 'Outdoor Gig',
        },
        {
            img: guitarSolo,
            title: 'Pourhouse',
        },
    ];

    render() {
        return (
            <div>
                <GridList style={this.styles.gridList} cols={2.2}>
                    {this.tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            // title={tile.title}
                            titlePosition="top"
                            cols={2}
                            rows={2}
                        >
                            <img src={tile.img} alt={tile.title} />
                        </GridTile>
                    ))}
                </GridList>
                <Card style={this.styles.leftJustified}>
                    <CardTitle title="Jake Luby" subtitle="Guitar Player"/>
                    <CardText >
                        With 20+ years of guitar playing experience and 10 years of teaching experience,
                        I can help you take your guitar playing to the next level.
                        <br/>
                        I've taught everyone from people who picked up a guitar for the first time,
                        to gigging guitar players wanting to stretch out of the pentatonic box.
                        <br/><br/>
                        I specialize in:
                        <ul>
                            <li>Strength and Dexterity Exercises</li>
                            <li>CAGED Theory</li>
                            <li>Linking Pentatonic Shapes</li>
                            <li>Playing Over Chords</li>
                            <li>7 Modes of the Major Scale</li>
                            <li>Major Scale Chord Theory</li>
                            <li>Playing in a Band Setting</li>
                            <li>Jazz Basics</li>
                        </ul>
                    </CardText>
                </Card>
            </div>
        );
    }
}