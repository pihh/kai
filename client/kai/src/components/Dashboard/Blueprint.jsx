// src/pages/PostPage.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import kai from '../../assets/kai.png';
import pi from '../../assets/pi.jpg';
import { getEntryById } from "../../services/api";

const dailyConfig = {
  Pi: {
    title: "text-2xl font-semibold text-gray-600 mt-12 flex items-center justify-between",
    quote: "border-l-4 border-gray-300 pl-4 italic text-gray-600 mt-2",
    avatar: pi
  },
  Kai: {
    title: "text-2xl font-semibold text-fuchsia-600 mt-12 flex items-center justify-between",
    quote: "border-l-4 border-fuchsia-300 pl-4 italic text-gray-600 mt-2",
    avatar: kai
  }
};

const DailyReflection = ({ who, content }) => (
  <div className="fade-in">
    <h2 className={dailyConfig[who].title}>
      <span>{who}'s Day</span>
      <img src={dailyConfig[who].avatar} alt={`${who}'s avatar`} className="size-6 rounded-full border bg-white" />
    </h2>
    <blockquote className={dailyConfig[who].quote}>{content}</blockquote>
  </div>
);

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getEntryById(id).then(res => setPost(res.data))
 
  }, [id]);

  if (!post) return <div className="p-6 text-gray-400">Loading...</div>;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      {post.visual && (
        <div
          className="relative h-72 w-full bg-cover bg-center flex items-end p-6"
          style={{
            backgroundImage: `url(${post.visual})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm" />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-fuchsia-600 drop-shadow">{post.title}</h1>
            <p className="text-gray-700 mt-1">{post.date} • <span className="text-xl">{post.emoji}</span></p>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-12 animate-fade-in">
        {/* Reflections */}
        <DailyReflection who="Kai" content={post.kai} />
        <DailyReflection who="Pi" content={post.pi} />

        {/* Visual again */}
        {post.visual && (
          <div className="mt-12 text-center">
            <img
              src={post.visual}
              alt="Picture of the day"
              className="rounded-xl mx-auto shadow max-h-[400px] object-contain"
            />
            <p className="text-sm italic text-gray-500 mt-2">Picture of the day</p>
          </div>
        )}

        {/* Notes */}
        {post.notes && (
          <details className="mt-10 cursor-pointer text-sm text-gray-600">
            <summary className="font-semibold">📝 Extra Notes</summary>
            <div className="mt-2 whitespace-pre-wrap">{post.notes}</div>
          </details>
        )}

        {/* Navigation */}
        <div className="mt-16 text-right">
          <Link to="/" className="text-fuchsia-600 hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
