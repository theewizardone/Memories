import React from 'react';
import { card, cardActions, cardContent, cardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import useStyles from './styles';

const Post = ({ post }) => (
  const classes = useStyles(),

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small">
          <ThumbUpAltIcon fontSize="default" />
        </Button>
        <Button style={{ color: "white" }} size="small">
          <DeleteIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {moment(post.createdAt).fromNow()}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post.likes.length} likes
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post.comments.length} comments
        </Typography>
      </div>
      <Typography variant="body2" color="textSecondary">
        {post.message}
      </Typography>
    </Card>
  );
); 

export default Post;


