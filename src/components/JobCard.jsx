import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <Link
      to=""
      className="w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between"
    >
      {/* Top Section */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">
            ⏳ Deadline: <span className="font-semibold">28/05/2024</span>
          </span>
          <span className="px-3 py-1 text-[10px] font-semibold text-blue-700 uppercase bg-blue-100 rounded-full">
            Web Development
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-xl font-bold text-gray-900 leading-snug">
          E-commerce Website Development
        </h1>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          Dramatically redefine bleeding-edge infrastructures after
          client-focused value. Intrinsicly seize user-centric partnerships
          through out-of-the-box architectures. Distinctively.
        </p>

        {/* Price & Bids */}
        <div className="mt-4 space-y-1">
          <p className="text-sm font-semibold text-gray-800">
            💰 Range: <span className="text-green-600">$500 - $600</span>
          </p>
          <p className="text-sm font-semibold text-gray-800">
            📊 Total Bids: <span className="text-blue-600">0</span>
          </p>
        </div>
      </div>

      {/* Footer / Button */}
      <div className="px-5 py-3 border-t bg-gray-50 rounded-b-2xl">
        <button className="w-full py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default JobCard;
