import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});


class Systems extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('systems');
        this.unsubscribe = null;
        this.state = {
            systems: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const systems = [];
        querySnapshot.forEach((doc) => {
            const { title, description, url } = doc.data();
            systems.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                description,
                url,
            });
        });
        this.setState({
            systems
        });
    };


    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        const { title, description, url } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>url</TableCell>
                                <TableCell align="right">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.systems.map(systems => (
                                <TableRow key={systems.id}>
                                    <TableCell component="th" scope="row">
                                        {systems.title}
                                    </TableCell>
                                    <TableCell>{systems.url}</TableCell>
                                    <TableCell align="right">{systems.description}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Link to="/systems/create">
                    <Button variant="contained" color="primary" className={classes.button}>Add Systems</Button>
                </Link>
            </div>
        );
    }
}

export default withStyles(useStyles)(Systems);
