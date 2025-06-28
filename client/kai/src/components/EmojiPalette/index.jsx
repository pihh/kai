import React from 'react';

const emojis = [
  '🕯️', '💬', '❤️', '🧠', '📖', '🌌', '🔮', '🔥', '🎨', '✨', '🧱', '🔐', '📦', '🌱', '💡'
];

export default function EmojiPalette({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 mt-8">
      {emojis.map((e, i) => (
        <button
          key={i}
          className="text-2xl hover:scale-125 transition"
          onClick={() => onSelect(e)}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
