"use client"

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchLatestStories } from "@/redux/slices/latestStoriesSlice";
import Card from "@/app/_components/Card";
import Image from "next/image";

export default function LatestNews() {
    const dispatch = useAppDispatch();
    const { stories, loading, error } = useAppSelector(state => state.latestStories);

    useEffect(() => {
        dispatch(fetchLatestStories());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

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

            <div className="container mt-20 mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
                    <div className="">
                        <Image
                            src="/img_2.png"
                            alt="AGC News Network Logo"
                            width={600}
                            height={500}
                            className="rounded-sm float-right w-fll object-over"
                        />
                    </div>

                    <div className="">
                        <Image
                            src="/img_3.png"
                            alt="AGC News Network Logo"
                            width={600}
                            height={500}
                            className="rounded-sm w-fll object-over"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
