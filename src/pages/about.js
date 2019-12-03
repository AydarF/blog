import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>About Me</h1>
        <p css={css`
            margin: 2rem auto;
            line-height: 1.6;
            `
        }>
            I'm a self-taught Front End Developer and I love building things with JavaScript!
            That said, I'd love to learn and master Back End (yay to Python!) and, eventually, 
            Machine Learning (because let's face it someone has to teach 
            those robots to take over the world (c) <span role="img" aria-label="Smiley face">😃</span>)
        </p>
        <Link to="/">&larr; Take me back Home!</Link>
    </Layout>
)