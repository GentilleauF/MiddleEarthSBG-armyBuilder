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

  //   return (
  //     <div>
  //         <p>About</p>
  // e facere vitae quidem voluptatibus inventore voluptas consequatur molestias quia illum sequi? Porro dicta facilis tenetur, eum magnam, illum animi magni suscipit ratione ducimus luptas ipsam, quae illo amet deleniti? Debitis similique at deserunt eum ipsam quidem architecto enim blanditiis numquam nam! Consectetur rerum deserunt necessitatibus quaerat hic porro tempora iste quos molestias? Mollitia rerum sed in impedit sunt repellendus excepturi ad assumenda inventore, sapiente magnam neque ea quidem cumque aspernatur ipsum eos. Quia, similique quasi tenetur animi est ad officia porro modi natus quos adipisci enim alias beatae! Magni minima sequi animi consectetur rerum illum, voluptatum earum accusamus obcaecati magnam dignissimos quidem ex dicta repudiandae odit voluptas laudantium. Distinctio blanditiis quidem quasi quis odio quae doloremque atque, temporibus architecto aliquid, reprehenderit voluptate rerum ducimus sequi recusandae fuga officia nisi deleniti laboriosam modi magnam aspernatur libero adipisci commodi? Hic animi voluptatum eveniet ex voluptatem beatae reiciendis, repellat velit eius mollitia molestias cum nostrum expedita eligendi dolorem iste! Tempora, necessitatibus! Debitis, harum obcaecati. Nobis adipisci eveniet, neque eius veritatis itaque consectetur voluptatibus excepturi temporibus tempora deleniti voluptatum nulla debitis suscipit quaerat iure provident corrupti ea asperiores. Eaque nulla ipsam odio doloribus porro. Voluptatum fuga ea magni nostrum corrupti nulla vero cupiditate omnis nihil reprehenderit expedita aliquam dolorum, inventore aut, veniam, molestiae illum numquam. Distinctio accusamus deleniti nemo recusandae quas, praesentium voluptatum ipsam repellendus illum consequatur ducimus eveniet. Asperiores, corporis unde!
  //     </div>

  //   );
};

export default About;
