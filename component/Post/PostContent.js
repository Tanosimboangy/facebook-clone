import React from 'react';
import styled from 'styled-components';

const PostContents = styled.ul`
    p {
        font-size: 20px;
        padding-bottom: 10px; 
    }
    img {
        max-width: 90%;
        border-radius: 8px;
        margin-bottom: 10px;
    }
`

function PostContent({item}) {
    return (
        <PostContents>
            <li><p>{item.postTextContent}</p></li>
            <li><img src={item.imgUrl}/></li>
        </PostContents>
    )
}

export default PostContent
