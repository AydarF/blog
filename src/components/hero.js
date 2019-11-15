import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
    background-position: top 20% center;
    background-size: cover;
    height: 50vh;

    + * {
        margin-top: 0;
    }
`;

const TextBox = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: 0 5vw 2rem;
    margin-top: 0;
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    
    @media (min-width: calc(550px + 10vw)) {
        padding-left: calc((100vw - 550px) / 2);
        padding-right: calc((100vw - 550px) / 2);
  }
  
    h1 {
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }

    p,
    a {
        color: #222;
    }

    a {
        margin-top: 0.5rem;
    }
`;

const Hero = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "osman-rana-bos.jpg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextBox>
                <h1>Hello fellow devs!</h1>
                <p>
                    <a rel="noopener noreferrer" href="https://aydarfz.netlify.com" target="_blank">Learn about me</a>
                </p>
            </TextBox>    
        </ImageBackground>
    );
};

export default Hero;