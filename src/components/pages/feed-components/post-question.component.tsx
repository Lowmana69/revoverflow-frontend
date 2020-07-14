import React from 'react';
import { Question } from '../../../models/question';
import { Button, makeStyles } from '@material-ui/core';
import { IState } from '../../../reducers';
import { connect } from 'react-redux';
import { postQuestion } from '../../../actions/question.actions';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    boxInternal: {
        color: "#f26925"
    },
    containerInternal: {
        marginTop: 100,
    },
});

export interface PostQuestionComponentProps {
    // question: Question | undefined;
    questions: Question[];
    postQuestion: (question: Question) => void;
}

export const PostQuestionComponent: React.FC<PostQuestionComponentProps> = (props) => {
    // const { question } = props;
    const history = useHistory();
    const classes = useStyles();

    const postQuestion = async () => {
        const question = {
            id: 1,
            title: "new title",
            content: "new content",
            creationDate: new Date(),
            status: true,
            userId: 1
        }
        props.postQuestion(question);
        console.log(props.questions);
    }

    return (
        <div className={classes.containerInternal}>
            <Button
                color="primary" size="large" variant="contained"
                onClick={postQuestion}
            >Post Question</Button>
            <Button onClick={() => history.push('/feed')}>Feed</Button>
        </div>
    )
}

const mapStateToProps = (state: IState) => {
    return {
        questions: state.questionState.collectedQuestions
    }
}

const mapDispatchToProps = {
    postQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(PostQuestionComponent);