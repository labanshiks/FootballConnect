import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import { useDispatch } from "react-redux";

import { commentPost } from "../../actions/posts";
import useStyles from "./styles";

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        {user?.result?.name && (
          <div style={{ width: "90%" }}>
            <Typography gutterBottom variant="h6" component="h2">
              Write a comment
            </Typography>
            <TextField
              fullWidth
              minRows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              component="p"
            />
            <br />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              color="primary"
              variant="contained"
              onClick={handleComment}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
      <br />
      <div className={classes.commentsInnerContainer}>
        {comments.map((c, i) => (
          <Typography key={i} gutterBottom variant="subtitle1" component="p">
            <strong>{c.split(": ")[0]}</strong>
            {c.split(":")[1]}
          </Typography>
        ))}
        <div ref={commentsRef} />
      </div>
    </div>
  );
};

export default CommentSection;
