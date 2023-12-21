"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();

    const userName = searchParams.get("name");
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${params?.id}/posts`);
            const data = await res.json();

            setUserPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <Profile
            name={userName}
            desc={`Weclome to ${userName}'s profile page.Explore ${userName}'s exeptional prompts`}
            data={userPosts}
        />
    );
};

export default UserProfile;
