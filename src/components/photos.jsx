import React from "react"

export default class PhotoCard extends React.Component {
  
    render() {
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
              allow="encrypted-media"
              allowFullScreen
              className="photo"
            />
          )}
        </div>
        <h2>Title: {photoData.title}</h2>
        <p className="date">date: {photoData.date}</p>
          
        </div>
      )
    }
}