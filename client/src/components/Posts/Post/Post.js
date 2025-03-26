import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Post = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.message}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;


