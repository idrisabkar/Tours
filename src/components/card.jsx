import React from 'react'

export function Card(props) {
  const { imgScr, title, content } = props
  return (
    <div className="container">
      <div className="image">
        <img src="./images/bujumbura.jpg" alt="" />
      </div>
      <h1 className="title">Best Of Ireland In 14 Days Tour</h1>
      <p className="content">
        Rick Steves' Best of Ireland tour kicks off with the best of Dublin,
        followed by Ireland's must-see historical sites, charming towns,
        music-filled pubs, and seaside getaways — including Kinsale, the Dingle
        Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara,
        Giant's Causeway, and the compelling city of Belfast. All along the way,
        Rick's guides will share their stories to draw you in to the Emerald
        Isle, and the friendliness of the people will surely steal your heart.
        Join us for the Best of Ireland in 14 Days!
      </p>
      <button className="btn">Not Enterested</button>
    </div>
  )
}
