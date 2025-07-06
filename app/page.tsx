"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchTopStories } from "@/redux/slices/topStoriesSlice";

export default function Home() {
    const dispatch = useAppDispatch();
    const { stories, loading, error } = useAppSelector((state) => state.topStories);

    useEffect(() => {
        dispatch(fetchTopStories());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;
    if (!stories.length) return <div>No stories available</div>;
    console.log("Stories loaded", stories);

    return (
        <div className="min-h-screen container mx-auto px-4">
            <h1 className="md:text-4xl text-3xl md:pt-20 pt-10 text-gray-900 font-semibold leading-tight">
                Top Stories
            </h1>

            <div className="grid grid-cols-1 mt-4 lg:grid-cols-[2fr_2fr] gap-4">
                <div className="border rounded-md relative overflow-hidden">
                    <img
                        src={stories[2].story.banner_image}
                        alt={stories[2].story.title}
                        className="w-full md:h-124 object-cover rounded"
                    />
                    <div className="absolute hidden md:block inset-0 bg-black/40 group-hover:bg-black/50 transition" />
                    <h2 className="md:absolute bottom-2 left-4 right-4 text-xl md:text-white text-gray-900 font-bold md:bg-blak/50 p-2 rounded">
                        <p className="text-lg mb-1 text-violet-500 font-normal">
                            Latest Today
                        </p>
                        {stories[2].story.subtitle}
                    </h2>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row gap-4">
                        {stories.slice(1, 3).map(({ story }, idx) => (
                            <div
                                key={idx}
                                className="relative border rounded-md flex flex-row md:flex-col items-start gap-2 w-full"
                            >
                                <img
                                    src={story.banner_image}
                                    alt={story.title}
                                    className="w-34 h-34 md:w-160 md:h-60 object-cover rounded"
                                />
                                <div className="absolute hidden md:block inset-0 bg-black/40 group-hover:bg-black/50 transition" />
                                <div className="md:absolute inset-0 md:flex flex-1 md:flex-col md:justify-end p-4 z-10 text-gray-900 md:text-white">
                                    <p className="text-sm text-violet-500 font-medium">News Today</p>
                                    <h3 className="text-lg font-semibold leading-snug">{story.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative border rounded-md flex flex-row md:flex-col items-start gap-2 w-full">
                        <img
                            src={stories[2].story.banner_image}
                            alt={stories[2].story.title}
                            className="w-34 h-34 md:w-full md:h-60 object-cover rounded"
                        />
                        <div className="absolute hidden md:block inset-0 bg-black/40 group-hover:bg-black/50 transition" />
                        <div className="md:absolute inset-0 md:flex flex-1 md:flex-col md:justify-end p-4 z-10 text-gray-900 md:text-white">
                            <p className="text-sm text-violet-500 font-medium">News Today</p>
                            <h3 className="text-lg font-semibold leading-snug">{stories[2].story.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
