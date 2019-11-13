import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
    const instaPhotos = useInstagram();
    const { username} = instaPhotos[0];

    return (
        <>
            <h2>Instagram posts from @{username}</h2>
            <div>
                {instaPhotos.map(photo => (
                    <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}></a>
                ))}
            </div>
            <a href={`https://instagram.com/${username}`}>
                Seee more posts on instagram
            </a>
        </>
    );
};

export default Insta;