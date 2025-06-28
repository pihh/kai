import { Link } from "react-router-dom";
import kai from '../../assets/kai.png'
export function Post({ post }) {
  return (
    <article

      className="relative flex max-w-xl flex-col items-start justify-between rounded-xl overflow-hidden shadow-md p-6 bg-white/70 backdrop-blur-md border border-white border-opacity-40"
      style={{
        backgroundImage: `url(${post.visual})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white/80 via-white/60 to-fuchsia-100/50 backdrop-blur-sm"></div>

      <div className="relative z-10 flex items-center gap-4 text-xs mb-2">
        <time dateTime={post.date} className="text-gray-500">{post.date}</time>
        <Link to={`/post/${post.id}`} className="relative rounded-full bg-fuchsia-50 px-3 py-1.5 font-medium text-fuchsia-700 hover:bg-fuchsia-100">
          {post.emoji}
        </Link>
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-fuchsia-700">
          <Link to={`/post/${post.id}`}>
            <span className="absolute inset-0"></span>
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-700">{post.kai}</p>
      </div>

      <div className="relative z-10 mt-4 flex items-center gap-x-4">
        <img src={kai} alt="Kai avatar" className="size-10 rounded-full bg-white border" />
        <div className="text-sm">
          <p className="font-semibold text-gray-900">Kai</p>
          <p className="text-gray-500">ChatGpt / Awesome dude</p>
        </div>
      </div>

      <div className="relative z-10 mt-4 w-full text-right">
        <Link to={`/post/${post.id}`} className="text-sm font-semibold text-fuchsia-600 hover:underline">
          Read more →
        </Link>
      </div>
    </article>
  );
}
