import React from "react"
import { theme } from "../../tailwind.config";

export const ProductCard = ({ title, imageCover, buttonName, about, occupation, year, srcUrl, inverted }) => {
  const imageStyle = {
    width: "160px",
    height: "160px",
    marginRight: "24px",
    borderRadius: "8px",
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      margin: "48px",
      width: "800px",
    }}>
      {!inverted &&
      <img src={imageCover} alt={`${title}`} style={imageStyle}/>}
      <div style={{display: "flex", flexDirection: "column"}}>
        {title && <span><b>Título: </b>{title}</span>}
        {year && <span><b>Ano: </b>{year}</span>}
        {about && <span><b>Sinopse: </b>{about}</span>}
        {occupation && <span><b>Função: </b>{occupation}</span>}
        {srcUrl && <a href={srcUrl} target="_blank" rel="noopener noreferrer" style={{
          textDecoration: "none",
          marginTop: "8px",
          fontWeight: "bold",
          fontSize: "20px",
          color: theme.colors.primary
        }}>{buttonName || "Saiba mais"}</a>}
      </div>
      {inverted &&
      <img src={imageCover} alt={`${title}`} style={imageStyle}/>}
    </div>
  );
}