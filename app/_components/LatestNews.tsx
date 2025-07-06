"use client"

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchLatestStories } from "@/redux/slices/latestStoriesSlice";
import Card from "@/app/_components/Card";

export default function LatestNews() {
    const dispatch = useAppDispatch();
    const { stories, loading, error } = useAppSelector(state => state.latestStories);

    useEffect(() => {
        dispatch(fetchLatestStories());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    console.log(stories);
    return (
        <>
            <h1 className="border-l-5 pl-3 border-l-violet-500 md:text-3xl text-3xl md:mt-20 mt-10 text-gray-900 font-semibold leading-tight">
                Latest News
            </h1>

            <div className="overflow-x-auto whitespace-nowrap flex gap-6 py-4 px-1">
                {Array.isArray(stories.data) && stories.data.map((item, i) => (
                    <div key={i} className="inline-block min-w-[320px] max-w-xs w-full">
                        <Card story={item} />
                    </div>
                ))}
            </div>
        </>
    );
}
