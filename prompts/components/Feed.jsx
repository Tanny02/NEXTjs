"use client";

import { useState, useEffect } from "react";
import PromptCardlist from "./PromptCardList";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const filteredPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    );
  };

  const handleSearchTextChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    const timeout = setTimeout(() => {
      setFilteredPosts(filteredPrompts(searchText));
    }, 500);
    setSearchTimeout(timeout);
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    setFilteredPosts(filteredPrompts(tagName));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/prompt");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchTextChange}
          required
          className="search_input peer"
        />
      </form>
      {searchText ? (
        <PromptCardlist data={filteredPosts} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardlist data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
