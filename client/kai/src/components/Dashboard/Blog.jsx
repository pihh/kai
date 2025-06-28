import { useState, useEffect } from "react"
import { Post } from "./Post"

import { getAllEntries } from "../../services/api";

export const Blog = (props = {}) => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        getAllEntries().then((res) => {
            setPosts(res.data);
        });
    }, []);
    return (
        <div className="main py-8 sm:py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
            </div>
        </div >

    )
}