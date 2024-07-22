import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import '../styles.css';

const BlogPostItem = ({ post }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
                {post.urlToImage && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={post.urlToImage}
                        alt={post.title}
                        className="card-media"
                    />
                )}
                <CardContent>
                    <Typography variant="h5" component="div">
                        <Link to={`/post/${encodeURIComponent(post.title)}`} className="link">
                            {post.title}
                        </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {new Date(post.publishedAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default BlogPostItem;
