import React from "react";

export const ProjectCard = ({src, name, description, link}) => {
  const cursorStyle = link ? "pointer" : "unset";

  return (
    <div style={{width:"300px", cursor: cursorStyle}} onClick={() => link ? window.open(link, "_blank") : console.log("not found")}>
      <img
        src={src}
        alt={name}
        className="rounded-4xl object-cover"
      />
      <h3 className="mb-md">{name}</h3>
      <p className="text-xs">{description}</p>
    </div>
  );
};