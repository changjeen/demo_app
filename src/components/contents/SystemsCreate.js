import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from './../../Firebase';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



class CreateSystems extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('systems');
        this.state = {
            title: '',
            description: '',
            url: ''
        };
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { title, description, url } = this.state;

        this.ref.add({
            title,
            description,
            url
        }).then((docRef) => {
            this.setState({
                title: '',
                description: '',
                url: ''
            });
            this.props.history.push("/")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };

    render() {
        const { title, description, url } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Link to="/">
                    <Button variant="contained" color="primary" className={classes.button}>Back</Button>
                </Link>
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit}>
                    <div>
                        <TextField
                            id="title"
                            className={classes.textField}
                            label="시스템명"
                            margin="normal"
                            name="title"
                            onChange={this.onChange}
                        />
                        <br/>
                        <TextField
                            id="url"
                            className={classes.textField}
                            label="URL"
                            margin="normal"
                            name="url"
                            onChange={this.onChange}
                        />
                        <br/>
                        <TextField
                            id="description"
                            className={classes.textField}
                            label="설명"
                            margin="normal"
                            name="description"
                            onChange={this.onChange}
                        />
                    </div>
                    <Button type="submit" color="primary" className={classes.button}>Submit</Button>
                </form>

            </div>
        );
    }
}

export default withStyles(useStyles)(CreateSystems);
