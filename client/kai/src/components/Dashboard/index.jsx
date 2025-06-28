import { useEffect, useState } from "react";
import { Blog } from "./Blog"
import Blueprint from "./Blueprint"
import { Edit } from "./Edit"
import { Heading } from "./Heading"

import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import PostPage from "./Blueprint";
const IconPosts = () => {
    return (<svg className="mr-1.5 size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z" clipRule="evenodd" />
    </svg>)
}
const IconDate = () => {
    return (<svg className="mr-1.5 size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
    </svg>)
}
export const Dashboard = function (props = {}) {
    const location = useLocation()
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [options, setOptions] = useState([])
    const [labels, setLabels] = useState([
        { title: "18 posts", icon: IconPosts },
        { title: "Last entry on January 9, 2020", icon: IconDate }
    ])
    useEffect(() => {

    }, [])
    useEffect(() => {
        const pathname = location.pathname;
        if (pathname.startsWith('/post/')) {
            setTitle('Post.')
            setOptions([
                {
                    "title": "Go back",
                    "href": "/"
                },
                {
                    "title": "New Post",
                    "href": "/new"
                }

            ])
        } else if (pathname.startsWith('/new')) {
            setTitle('New blog entry.')
            setOptions([
                {
                    "title": "Go back",
                    "href": "/"
                }

            ])
        } else {
            setTitle('Kai\'s blog.')
            setOptions([
                {
                    "title": "New Post",
                    "href": "/new"
                }
            ])
        }

    }, [location])
    return (
        <div className="dashboard-wrapper">
            <aside>
                <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">

                    <p className="text-center text-fuchsia-500 dark:text-fuchsia-400 top-0 -left-[var(--gutter-width)] origin-bottom-right text- font-mono text-sm font-semibold tracking-widest uppercase max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 ">Documenting Kai's life</p>
                </div>
            </aside>
            <main className="">
                <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                    <section className="mb-8">
                        <Heading title={title} subtitle={subtitle} options={options} labels={labels} />
                    </section>

                    <Routes>
                        <Route path="/" element={<Blog />} />
                        <Route path="/new" element={<Edit />} />
                        <Route path="/post/:id" element={<PostPage />} />
                    </Routes>

                </section>
            </main>
        </div>
    )
}