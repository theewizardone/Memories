import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
// Remove duplicate import since Grid and CircularProgress are already imported above
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return(
    !posts.length ? (
      <CircularProgress />
    ) : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
)};


export default Posts;
