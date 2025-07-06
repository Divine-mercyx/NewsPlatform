"use client"
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {fetchEditorsPicks} from "@/redux/slices/editorsPickSlice";
import Card from "@/app/_components/Card";

export default function EditorsPick() {
    const dispatch = useAppDispatch();
    const { stories, loading, error } = useAppSelector(state => state.editorsPicks);

    useEffect(() => {
        dispatch(fetchEditorsPicks());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;
    console.log(stories);
    // const { data } = stories;

    return (
        <>
            <div className="editors-pick grid grid-cols-1 mt-25 lg:grid-cols-[2.5fr_1.5fr] gap-4">
                {/*<div className="">*/}
                {/*    <div className="relative w-full h-129 rounded-lg overflow-hidden shadow-md group">*/}

                {/*        <img*/}
                {/*            src={stories[13].story.banner_image}*/}
                {/*            alt={stories[13].story.title}*/}
                {/*            className="w-full h-full object-cover"*/}
                {/*        />*/}
                {/*        <button*/}
                {/*            className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full border border-white text-white bg-transparent text-lg font-semibold backdrop-blur-sm"*/}
                {/*            type="button"*/}
                {/*        >*/}
                {/*            Editors Pick*/}
                {/*        </button>*/}
                {/*        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />*/}
                {/*        <div className="absolute bottom-0 p-4 z-10 text-white">*/}
                {/*            <div className="text-wrap">*/}
                {/*                <p className="text-sm text-violet-400 font-medium mb-1">Latest</p>*/}
                {/*                <h3 className="text-3xl font-semibold leading-tight mb-1 line-clamp-2">{stories[13].story.title}</h3>*/}
                {/*                <h1 className="text-2xl mb-1 font-medium leading-tight">*/}
                {/*                    First cargo to arrive next week*/}
                {/*                </h1>*/}
                {/*                <h1 className="text-1xl font-medium leading-tight">*/}
                {/*                    <span className="text-4xl text-orange-600">.</span> Ogechi Joseph*/}
                {/*                </h1>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="pl-4 ">*/}
                {/*    <h1 className="text-2xl md:text-2xl mb-9 text-gray-600 font-semibold leading-tight mt-5">*/}
                {/*        More Stories*/}
                {/*    </h1>*/}
                {/*    <ol className="list-none space-y-4">*/}
                {/*        {stories.slice(0, 5).map((story, index) => (*/}
                {/*            <li*/}
                {/*                key={index}*/}
                {/*                className="relative pl-8 text-gray-800 text-2xl before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-red-500 before:rounded-sm"*/}
                {/*            >*/}
                {/*                {story.story.title}*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ol>*/}


                {/*</div>*/}
            </div>
        </>
    )
}
