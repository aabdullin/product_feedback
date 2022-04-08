import React, {
    useState,
  } from "react";
  import '../css/AddUserFeedback.css';
  import {
    BrowserRouter as Router,
    Link,
    useHistory,
    useParams,
  } from "react-router-dom";

const AddUserFeedback = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div className=".userFeedback">
        <div>
            <label>
            User Feedback:
            <input className="form"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </label>
        </div>

        <div>
            <Link to="/">
            <button>Cancel</button>
            </Link>
            <input
            type="submit"
            value="Submit"
            onClick={() => {
                history.push("/");
            }}
            />
        </div>
      </div>
    );
  }

  export default AddUserFeedback