import React from 'react';

const TeamMember = ({ name, image }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4 object-cover"
      />
      <p className="text-lg font-semibold text-gray-800">{name}</p>
    </div>
  );
};

export default TeamMember;
