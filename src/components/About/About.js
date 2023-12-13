import React, { useState } from "react";

const About = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  function handleOpenOverlay() {
    setIsOverlayOpen(true);
  }

  function handleCloseOverlay() {
    setIsOverlayOpen(false);
  }

  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={handleOpenOverlay}>Ouvrir le modal</button>
        {isOverlayOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Contenu du modal</h2>
              <button onClick={handleCloseOverlay}>Fermer</button>
            </div>
          </div>
        )}
      </div>
     
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem
        vero atque eligendi numquam voluptate laudantium ad, pariatur, autem ex
        labore eius mollitia aut sunt. Atque, exercitationem est? Tempore
        consequatur facere quod magnam consequuntur eaque animi minus doloribus
        voluptas totam! Sequi, autem eius. Quis impedit eveniet repellat
        voluptates commodi eaque repudiandae, nobis aspernatur quisquam ea
        molestias aliquid hic perspiciatis voluptatibus debitis doloribus eos
        quibusdam quo corporis nulla velit dolores beatae! Provident natus
        veniam, enim temporibus fugit beatae voluptatem repudiandae
        reprehenderit tempore autem praesentium, commodi laborum in amet facilis
        unde, dolores consectetur et! Sapiente ex molestiae illo veniam numquam
        corporis autem.
      </p>
    </div>
  );
};

export default About;
