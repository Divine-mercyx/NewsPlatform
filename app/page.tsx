"use client";

import TopStories from "@/app/_components/TopStories";
import LatestNews from "@/app/_components/LatestNews";

export default function Home() {


    return (
        <div className="min-h-screen container mx-auto px-4">
            <TopStories />
            <LatestNews />
        </div>
    );
}
