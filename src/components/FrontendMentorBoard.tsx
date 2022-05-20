import "../css/Header.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select,  { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import {
    Link,
} from "react-router-dom";
import '../css/FrontendMentorBoard.css';






const FrontEndMentorBoard = () => {

    return (
        <div className="feedback">
            <div className="header">
                Frontend Mentor
            </div>
            <div className="feedback_board">
                Feedback Board
            </div>

        </div>
    );
}


export default FrontEndMentorBoard;