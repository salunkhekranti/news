import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Button } from '@mui/material';
import '../styles.css';

const BlogPostDetails = () => {
    const { title } = useParams();
    const [post, setPost] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/everything?q=${decodeURIComponent(title as string)}&apiKey=5abe02d0ed6341008b1e6e45438eaef5`)
            .then(response => {
                setPost(response.data.articles[0]);
                console.log(response)
            });
    }, [title]);

    if (!post) return <div>Loading...</div>;

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                Back
            </Button>
            <Typography variant="h3" component="div">
                {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {new Date(post.publishedAt).toLocaleDateString()}
            </Typography>
            {post.urlToImage && (
                <img src={post.urlToImage} alt={post.title} className="post-image" />
            )}
            <Typography variant="body1" component="div">
                {post.content}
            </Typography>
        </Container>
    );
};

export default BlogPostDetails;
