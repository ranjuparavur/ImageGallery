import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.src.medium} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            <a href={image.photographer_url}>Photo by {image.photographer}</a>
          </div>
          <ul>
            <li>
              <strong></strong>
            </li>
          </ul>
        </div>
        {/* <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default ImageCard;
