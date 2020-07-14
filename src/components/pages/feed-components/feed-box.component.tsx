import React from 'react';
import { makeStyles, Box, Card } from '@material-ui/core';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    boxInternal: {
        marginBottom: 5,
        marginTop: 10,
        borderStyle: "solid",
        borderColor: "#f26925",
    },
});

interface FeedBoxComponentProps {
    userId: number;
    title: string;
    content: String;
}

export const FeedBoxComponent: React.FC<FeedBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/forum');
    }

    return (
        <Card className={classes.boxInternal}>
            <Box  onClick={() => handleRedirect()} >
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <h3>{props.userId}</h3>
            </Box>
        </Card>
    )
}

//!Onlick redirect to Forum page and Pass Question Id