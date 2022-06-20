import React from 'react';
import './modal.styl';

function Modal(props) {
  const titulo = props.title;
  const url = props.url;

  return (
    <section id="modal-container-layout">
      <div className="Modal">
        <section className="header-modal">
          <h1>{titulo}</h1>
          <img src={url}/>
          <button
            onClick={props.handleClick}
            className="Modal-close"
            />
        </section>
        <section className="body-modal">
          {props.children}
        </section>

      </div>
    </section>
  )
}

export default Modal;
