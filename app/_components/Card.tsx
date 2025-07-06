interface CardProps {
    story: {
        title: string;
        banner_image: string;
        category: {
            category_name: string;
        };
    };
}

export default function Card({ story }: CardProps) {
    return (
        <div className="relative w-full h-90 rounded-lg overflow-hidden shadow-md group">
            <img
                src={story.banner_image}
                alt={story.title}
                className="w-full h-full object-cover"
            />
            <button
                className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full border border-white text-white bg-transparent text-xs font-semibold backdrop-blur-sm"
                type="button"
            >
                { story.category.category_name }
            </button>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
            <div className="absolute bottom-0 p-4 z-10 text-white">
                <div className="text-wrap">
                    <p className="text-sm text-violet-400 font-medium mb-1">Latest</p>
                    <h3 className="text-base font-semibold leading-tight line-clamp-2">{story.title}</h3>
                </div>
            </div>
        </div>
    );
}
