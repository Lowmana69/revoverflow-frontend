import React, {/* useState */} from 'react';
import { Button,/*TextareaAutosize,*/InputLabel } from '@material-ui/core';
//import { connect } from 'react-redux';
//import { Answer } from '../../models/answer';
import { useHistory } from 'react-router';
//import {postAnswer } from '../../actions/Answer.actions';

export interface PostAnswerComponentProps {
       // userID?:number;//mapped
        //saveAnswer?: (body:string, userID:number) => void;//mapped
        //postAnswer: (answer:Answer) => void;//going to get mapped
    }

export const PostAnswerComponent: React.FC<PostAnswerComponentProps> = (props) =>{
    const history = useHistory();
    /*const [body='', setBody] = useState<string>();
    function handleBodyChange(e: { target: { value: React.SetStateAction<string | undefined>; }; }) 
    {   let qBody = '<pre>' + e.target.value + '</pre>';//the "pre" tag maintains spacing and formatting
        setBody(qBody);  }*/
    const createAnswer = async () => {
        //props.postAnswer(body,props.userID);
        //let currDateTime = new Date();
        //const answer:Answer={content:body,creationDate:currDateTime,questionId:0,userId:2};//question & user IDs hardcoded respectively
        //props.postAnswer(answer);
        history.push('/forum');
    }
    return(//modal automatically opens and must be closed using the "cancel" button
        <React.Fragment>
            <form>
            <InputLabel>Type Answer Here</InputLabel>
                {/*<TextareaAutosize id="body" rowsMin={10} onChange={() => handleBodyChange}/>*/}
                <span>
                    <Button onClick={() => createAnswer()}>Submit</Button>
                </span>
            </form>
        </React.Fragment>
    );
}
// This will map a state value to a property that this component will get access to
// Functionally the 'clicks' prop will reflect the state of the clickerState.clicks
/*const mapStateToProps = (state: AnswerState) => {
    return {
        //userID: state.userState.userID
    }
}
// This will map actions defined in action files to props that can be used by this component
const mapDispatchToProps = {
    postAnswer
}
// connect will connect the component to the store, suppling all requested props
export default connect(mapStateToProps, mapDispatchToProps)(PostAnswerComponent);*/