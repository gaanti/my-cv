import React, {useEffect, useRef, useState} from 'react';
import {
    BlogCard,
    BlogCardContainer,
    BlogCardContent,
    BlogCardDate,
    BlogCardExcerpt,
    BlogCardTitle,
    BlogContainer,
    BlogImage,
    BlogTitle,
    BlogWrapper
} from "./styles";

export function Blog() {

    return (
        <BlogWrapper>
            <BlogContainer>
                <BlogTitle>My Latest Blog Posts</BlogTitle>
                <Posts/>
            </BlogContainer>
        </BlogWrapper>
    );
}

interface post {
    feed: unknown
    items: {
        author: string
        categories: string[]
        content: string
        description: string
        enclosure: {}
        guid: string
        link: string
        pubDate: string
        thumbnail: string
        title: string
    }[]
    status: string
}

function Posts() {
    const [posts, setData] = useState<post>();
    const shouldFecth = useRef(true)

    async function fetchPosts() {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gaskevich06");
        const jsonData = await response.json() as post;
        setData(jsonData)
    }

    useEffect(() => {
        if (shouldFecth.current) {
            fetchPosts()
        }
        return () => {
            shouldFecth.current = false
        }
    }, [])


    return (
        <BlogCardContainer>
            {posts?.items.map(post => (
                <BlogCard key={post.title}
                          href={post.link} target="_blank">
                    {/*<BlogImage src={post.thumbnail} alt="Blog Post"/>*/}
                    <BlogImage src={post.thumbnail} alt="Blog Post"/>
                    <BlogCardContent>
                        <BlogCardTitle>{post.title}</BlogCardTitle>
                        <BlogCardExcerpt>
                            {processDescription(post.description)}
                        </BlogCardExcerpt>
                        <BlogCardDate>Published on {post.pubDate}</BlogCardDate>
                    </BlogCardContent>
                </BlogCard>
            ))
            }
        </BlogCardContainer>
    )
}
function processDescription(description: string) {
    const start = "<h4>";
    const end = "</h4>";
    const startIndex = description.indexOf(start) + start.length;
    const endIndex = description.indexOf(end);
    const result = description.substring(startIndex, endIndex);
    console.log(result);
    return result
}