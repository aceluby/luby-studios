import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainToolbar from './toolbar/MainToolbar';
import Home from "./home/Home";
import About from "./about/About";
import Yod from "./yoga/Yod";
import YogaContact from "./yoga/YogaContact";
import WebsiteAbout from "./website/WebsiteAbout";
import WebsiteExamples from "./website/WebsiteExamples";
import WebsiteContact from "./website/WebsiteContact";
import Yoga from "./yoga/Yoga";
import Barre from "./yoga/Barre";
import Guitar from "./guitar/Guitar";
import {Card, CardMedia} from "material-ui";
import banner from './images/luby-studios-banner.png'

class App extends Component {

    constructor(props) {
        super(props);

        this.setPage = this.setPage.bind(this);
        this.state = {
            page: "Home"
        };

        document.title = "Luby Studios"
    }

    setPage(selectedPage) {
        this.setState({
            page: selectedPage,
        });
    }

    bannerStyle = {
        height: 200,
    };

    render() {
        var currentPage;
        switch (this.state.page) {
            case "About Us":
                currentPage = <About/>;
                break;
            case "Yoga":
                currentPage = <Yoga/>;
                break;
            case "YOD":
                currentPage = <Yod/>;
                break;
            case "Barre":
                currentPage = <Barre/>;
                break;
            case "Yoga Contact":
                currentPage = <YogaContact/>;
                break;
            case "Website About":
                currentPage = <WebsiteAbout/>;
                break;
            case "Website Examples":
                currentPage = <WebsiteExamples/>;
                break;
            case "Website Contact":
                currentPage = <WebsiteContact/>;
                break;
            case "Guitar Lessons":
                currentPage = <Guitar/>;
                break;
            default:
                currentPage = <Home/>;
                break;
        }
        return (
            <div className="App">
                <MuiThemeProvider>
                    <div>
                        <Card>
                            <CardMedia>
                                <img src={banner} alt="" style={this.bannerStyle}/>
                            </CardMedia>
                        </Card>
                        <MainToolbar setPage={this.setPage}/>
                        {currentPage}
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
