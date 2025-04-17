import { Clock } from "lucide-react";
import React from "react";

const Songs = () => {
  const SongsList = [
    {
      id: 1,
      title: "Soddddddddddddddddddddddddddddddddng 1",
      artist: "Artist 1",
      time: "3:45",
    },
    { id: 2, title: "Song 2", artist: "Artist 2", time: "4:00" },
    { id: 3, title: "Song 3", artist: "Artist 3", time: "2:30" },
    { id: 4, title: "Song 4", artist: "Artist 4", time: "5:15" },
  ];
  return (
    <div className="w-[96%] mx-auto  px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Songs collection
      </h2>
      <ul className="space-y-4">
        {SongsList.map((song) => (
          <li
            key={song.id}
            className="flex items-center justify-between
      p-3 hover:bg-[#2A2929] rounded-md cursor-pointer
      transition-all duration-200 ease-in-out transform
      hover:scale-105"
          >
            <div className="flex items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=86&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMyA3fbB8MMxwaG90by1wYWdLfHx8fGVufDB8fHx8fAX3DX3D"
                className="h-16 w-16 bg-gray-700 rounded-md flex-shrink-0"
              />
              <div>
                <p className="text-white font-medium">{song.artist}</p>
                <p className="text-sm text-gray-400">{song.title}</p>
              </div>

              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
