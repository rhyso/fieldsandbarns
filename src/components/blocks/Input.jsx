import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

const Input = () => {
    const classes = useStyles();

    const [state, setState] = useState()
    console.log(state)
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <span>{state}</span>
                <TextField
                    id="outlined-basic"
                    className={classes.textField}
                    label="Outlined"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => setState(event.target.value)}
                />
            </div>
        </form>
    );
}

export default Input
