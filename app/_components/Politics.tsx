"use client";

import Image from "next/image";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hook";
import {fetchEditorsPicks} from "@/redux/slices/editorsPickSlice";

const dummy = {
    title: "Falana Asks FG To Review Fuel Subsidy Removal",
    subtitle: "Human rights lawyer Femi Falana (SAN) wants the Federal Government to review the fuel subsidy removal policy owing to claims that Nigeria is still paying for it.",
    image: "/pump.jpg",
    author: "Ogechi Joseph",
    time: "13 mins ago",
};

const sidebarItems = new Array(4).fill(dummy);

export default function Politics() {
    const dispatch = useAppDispatch();
    const { stories, loading, error } = useAppSelector(state => state.editorsPicks);

    useEffect(() => {
        dispatch(fetchEditorsPicks());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <section className="grid grid-cols-1 lg:grid-cols-[2.5fr_1.5fr] gap-6 mt-25">
            {/* LEFT MAIN STORY */}
            <div>
                <h2 className="text-2xl font-semibold text-violet-500 uppercase tracking-wider mb-3">
                    <span className="border-l-4 border-violet-500 pl-2">Politics</span>
                </h2>

                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src={stories[14].story.banner_image}
                        alt={stories[14].story.title}
                        className="w-full h-[290px] md:h-[560px] object-cover rounded-lg"
                    />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mt-4 text-gray-900">
                    {stories[14].story.title}
                </h3>

                <p className="text-gray-600 mt-2">{stories[14].story.subtitle}</p>

                <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        <span>{stories[14].story.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        <span>Posted {dummy.time}</span>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDEBAR STORIES */}
            <div className="space-y-4">
                <br /><br />
                {stories.slice(9, 14).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 border-b pb-3 last:border-b-0">
                        {/* Red bullet box */}
                        <div className="w-2 h-2 bg-red-500 rounded-sm flex-shrink-0" />
                        {/* Title & Image */}
                        <div className="flex justify-between items-center w-full gap-3">
                            <p className="text-gray-800 text-2xl text-gray-800 flex-1">
                                {item.story.title}
                            </p>
                            <img
                                src={item.story.banner_image}
                                alt="thumbnail"
                                className="w-29 h-25 object-cover rounded"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
