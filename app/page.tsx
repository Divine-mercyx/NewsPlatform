"use client";

import TopStories from "@/app/_components/TopStories";
import LatestNews from "@/app/_components/LatestNews";
import EditorsPick from "@/app/_components/EditorsPick";
import Business from "@/app/_components/Business";
import Politics from "@/app/_components/Politics";
import Sports from "@/app/_components/Sports";
import FeaturedStories from "@/app/_components/FeaturedStories";
import NewsVideo from "@/app/_components/NewsVideo";

export default function Home() {

    return (
        <div className="min-h-screen container mx-auto px-4">
            <TopStories />
            <LatestNews />
            <EditorsPick />
            <Politics />
            <Business />
            <Sports />
            <FeaturedStories />
            <NewsVideo />
        </div>
    );
}
