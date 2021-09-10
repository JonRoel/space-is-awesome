import React, { useState, useEffect, Component } from "react"

// const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PhotoCard() {

  // const [photo, setPhoto] = useState(null);

  // const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
  // useEffect(() => {
  //   fetchPhoto();

  //   async function fetchPhoto() {
  //     const res = await fetch(apiUrl);
  //     const data = await res.json();
  //     setPhoto(data);
  //   }
  // }, []);

  const { photoData } = this.props;
  
  return (
    <div>
    <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img
            src={photoData.url}
            alt={photoData.title}
            className="photo"
          />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
      </div>
      <h2>{photoData.title}</h2>
      <p className="date">{photoData.date}</p>
      
    </div>
  )
}