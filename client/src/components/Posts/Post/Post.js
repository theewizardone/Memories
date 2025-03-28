import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { styled } from '@mui/material/styles';

// Styled Components (Replaces makeStyles)
const StyledCard = styled(Card)({
  borderRadius: 15,
  margin: "20px",
  display: "flex",
  flexDirection: "column",
});

const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

const StyledOverlay = styled('div')({
  position: "absolute",
  top: "10px",
  left: "10px",
  color: "white",
});

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <StyledMedia image={post.selectedFile} title={post.title} />
      
      <StyledOverlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </StyledOverlay>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" /> 
          &nbsp;Like &nbsp;
           {post.likeCount} 
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> 
          Delete
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default Post;



