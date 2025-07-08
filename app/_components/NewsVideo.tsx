"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchEditorsPicks } from "@/redux/slices/editorsPickSlice";
import { Play } from "lucide-react";
import type { RootState } from "@/redux/store";


export default function NewsVideo() {
    const dispatch = useAppDispatch();
    const { stories, loading, error } = useAppSelector(
        (state: RootState) => state.editorsPicks
    );

    useEffect(() => {
        dispatch(fetchEditorsPicks());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;


    return (
        <section className="mt-25 px-4 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                NEWS IN VIDEOS
            </h2>

            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.slice(9, 15).map((video, i) => (
                    <div key={i}>
                        <div className="relative w-full h-60 rounded overflow-hidden group">
                            <img
                                src={video?.story.banner_image}
                                alt={video?.story.title}
                                className="rounded w-full object-cover"
                            />
                            <div className="absolute top-3 left-3 bg-white/60 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                                World News
                            </div>
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Play className="w-10 h-10 text-white bg-black/50 rounded-full p-2" />
                            </div>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-gray-900 leading-tight">
                            {video.story.title}
                        </h3>
                        <hr className="mt-2 border-gray-300" />
                    </div>
                ))}
            </div>

            <div className="md:hidden flex flex-col gap-6">
                {stories.slice(9, 15).map((video, i) => (
                    <div key={i}>
                        {i === 0 ? (
                            <div className="relative w-full h-60 rounded overflow-hidden">
                                <img
                                    src={video.story.banner_image}
                                    alt={video.story.title}
                                    className="rounded w-full object-cover"
                                />
                                <div className="absolute top-3 left-3 bg-white/60 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                                    World News
                                </div>
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <Play className="w-10 h-10 text-white bg-black/50 rounded-full p-2" />
                                </div>
                                <h3 className="absolute bottom-3 left-3 text-white font-semibold text-sm drop-shadow">
                                    {video.story.title}
                                </h3>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className="relative w-full min-w-[120px] h-[80px] rounded overflow-hidden">
                                    <img
                                        src={video.story.banner_image}
                                        alt={video.story.title}
                                        className="rounded w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <Play className="w-6 h-6 text-white bg-black/50 rounded-full p-1" />
                                    </div>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {video.story.title}
                                </h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
