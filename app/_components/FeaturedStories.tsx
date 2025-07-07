"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchSportsStories } from "@/redux/slices/sportsStoriesSlice";
import Image from "next/image";
import type { RootState } from "@/redux/store";


export default function FeaturedStories() {

    const dispatch = useAppDispatch();
    const { stories, loading, error } = useAppSelector(
        (state: RootState) => state.sportsStories
    );

    useEffect(() => {
        dispatch(fetchSportsStories());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    const headlines = [
        "Binance: Nigeria orders cryptocurrency firm to pay $10bn",
        "Rivers Community Protests Alleged Killing Of Indigenes By Militia",
        "Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest",
        "Foden Sparkles As Man City Crush Spineless Man United",
        "Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog",
    ];

    const ads = ["/img_4.png", "/img_5.png"];

    return (
        <section className="mt-25 px-4 lg:px-0">
            <h2 className="text-2xl font-semibold mb-4">
                <span className="border-l-4 text-gray-900 hidden md:block lg:block border-violet-500 pl-2">FEATURED STORIES</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1.6fr_0.8fr] gap-6">
                <div className="hidden md:block lg:block">
                    <img
                        src={stories[3]?.banner_image}
                        alt={`Ad`}
                        className="w-full h-60 md:h-72 object-cover rounded-md"
                    />
                    <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-900 leading-tight">
                        {stories[3]?.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>{stories[5]?.title}</span>
                        </div>
                    </div>
                    <ul className="space-y-2 w-full mt-2">
                        {headlines.slice(1, 5).map((headline, idx) => (
                            <li key={idx} className="text-gray-700 text-2xl hover:underline cursor-pointer">
                                {headline}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:block lg:block">
                    <img
                        src={stories[5]?.banner_image}
                        alt={stories[5]?.title}
                        className="w-full h-60 md:h-72 object-cover rounded-md"
                    />
                    <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-900 leading-tight">
                        {stories[5]?.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mt-2 mb-4">
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>{stories[5]?.title}</span>
                        </div>
                    </div>

                    <ul className="space-y-2 w-full mt-2">
                        {headlines.map((headline, idx) => (
                            <li key={idx} className="text-gray-700 text-2xl hover:underline cursor-pointer">
                                {headline}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-700 text-end text-sm hover:underline cursor-pointer">
                        Advertisement
                    </p>
                    {ads.map((src, idx) => (
                        <Image
                            key={idx}
                            src={src}
                            alt={`Ad ${idx + 1}`}
                            width={400}
                            height={300}
                            className="w-full object-cover rounded-md"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
