import React from "react";

export const ProjectCard = ({src, name, description}) => {
  return (
    <div style={{width:"300px"}}>
      <img
        src={src}
        alt={name}
        className="rounded-4xl w-56 h-56"
      />
      <h3 className="mb-md">{name}</h3>
      <p className="text-xs">{description}</p>
    </div>
  );
};