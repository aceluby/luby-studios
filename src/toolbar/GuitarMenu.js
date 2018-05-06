import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';

export default class GuitarMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    click = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    close = () => {
        this.setState({
            open: false,
        });
    };

    setPage = (page) => {
        this.props.setPage(page);
        this.close();
    };

    render() {
        return (
            <div>
                <FlatButton
                    onClick={this.click}
                    label="Guitar Lessons"
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.close}
                >
                    <Menu>
                        <MenuItem primaryText="Info" onClick={() => this.setPage("Guitar Lessons")}/>
                        <MenuItem primaryText="Contact" onClick={() => this.setPage("Guitar Contact")}/>
                    </Menu>
                </Popover>
            </div>

        );
    }
}