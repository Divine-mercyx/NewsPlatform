export interface Story {
    id: number;
    story: {
        title: string;
        subtitle: string;
        description: string;
        content: string;
        status: string;
        type: string;
        author: string;
        views: number;
        featured: string | boolean;
        banner_image: string;
        category: {
            category_id: number;
            category_name: string;
        };
    }
    created_at: string;
    updated_at: string;
}

export interface TopStoryResponse {
    message: string;
    data: {
        data: {
            id: number;
            story: Story;
            created_at: string;
            updated_at: string;
        }[];
    };
}
