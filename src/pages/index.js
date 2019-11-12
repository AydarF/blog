import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import ReadLink from '../components/read-link';

export default () => {
    const posts = usePosts();

    return (
        <Layout>
            <h1>Home</h1>
            <p>Hi fellow devs!</p>
            <ReadLink to="/about/"> Learn about me &rarr;</ReadLink>

            <h2>Read my blog</h2>
            {posts.map(post => (
                <PostPreview key={post.slug} post={post} />
            ))}
        </Layout>
);}
