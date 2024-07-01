"use client";

import Profile from "@components/Profile";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const router = useRouter();

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const prompts = await response.json();
      setPosts(prompts);
    };
    if (params.id) fetchPrompts();
  }, [params.id]);

  const handleEdit = async (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt ?"
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id}`, {
          method: "DELETE",
        });
        setPosts(posts.filter((p) => p._id !== post._id));
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div>
      <Profile
        name={`${userName}'s`}
        desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default DynamicProfile;
