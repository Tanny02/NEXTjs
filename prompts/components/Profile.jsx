import Link from "next/link";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1
        className={`head_text ${
          data.length > 0 ? "text-left" : "text-center"
        } `}
      >
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className={`desc ${data.length > 0 ? "text-left" : "text-center"}`}>
        {desc}
      </p>
      {data.length > 0 ? (
        <div className="mt-10 prompt_layout">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-16 border border-dashed border-black rounded-full p-3">
          <p>You haven't created any prompts yet</p>
          <Link href={"/create-prompt"} className="text-green-500">
            Get Started
          </Link>
        </div>
      )}
    </section>
  );
};

export default Profile;
