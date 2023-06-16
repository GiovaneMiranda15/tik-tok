import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function videoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@giovaneluna</h3>
        <p>Videos engraçados 1</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter_music" />
          <div className="videoFooterMusic_text">
            <p>Miau Miau</p>
          </div>
        </div>
        <img
          className="videoFooter_record"
          alt="Imagem de um vinil girando"
          src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
        />
      </div>
    </div>
  );
}

export default videoFooter;
