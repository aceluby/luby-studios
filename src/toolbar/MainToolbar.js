import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import YogaMenu from "./YogaMenu";
import WebsiteMenu from "./WebsiteMenu";
import {ToolbarTitle} from "material-ui";
import GuitarMenu from "./GuitarMenu";

export default class MainToolbar extends React.Component {

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle></ToolbarTitle>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton
                        onClick={() => this.props.setPage("Home")}
                        label="Home"
                    />
                    <ToolbarSeparator/>
                    <FlatButton
                        onClick={() => this.props.setPage("About Us")}
                        label="About Us"
                    />
                    <ToolbarSeparator/>
                    <YogaMenu setPage={this.props.setPage}/>
                    <ToolbarSeparator/>
                    <WebsiteMenu setPage={this.props.setPage}/>
                    <ToolbarSeparator />
                    <GuitarMenu setPage={this.props.setPage}/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle></ToolbarTitle>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}