import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

function createData(name, url, ip, category) {
    return { name, url, ip, category };
}

const rows = [
    createData('DFAS', 'dfas.corp.dosoan.com', '10.111.123.123', 'Legacy'),
    createData('DooEM', 'dooem.corp.doosan.com', '10.111.123.1', 'Legacy'),
    createData('회의실예약', 'potal.doosan.com', '10.111.123.2', 'Legacy'),

];

export default function Systems() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>이름</TableCell>
                        <TableCell align="right">URL</TableCell>
                        <TableCell align="right">IP</TableCell>
                        <TableCell align="right">카테고리</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.url}</TableCell>
                            <TableCell align="right">{row.ip}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}