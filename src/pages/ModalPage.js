import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={onClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={onClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
        metus et enim sagittis tempor sit amet sed orci. Duis et dignissim
        nulla. In id varius turpis. Fusce vitae dictum turpis. Phasellus
        efficitur tempus porta. Nunc in nisi in magna varius convallis. Nam
        felis nibh, tristique et hendrerit ut, sodales eget nisl. Donec mollis a
        purus id facilisis. Ut a viverra est. Sed quis quam quis mi molestie
        elementum vitae vel libero. Aenean mauris odio, lobortis sed suscipit
        id, sagittis id libero. Nunc odio mauris, pellentesque vitae lectus
        eget, volutpat dignissim quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla maximus metus et enim sagittis tempor sit amet
        sed orci. Duis et dignissim nulla. In id varius turpis. Fusce vitae
        dictum turpis. Phasellus efficitur tempus porta. Nunc in nisi in magna
        varius convallis. Nam felis nibh, tristique et hendrerit ut, sodales
        eget nisl. Donec mollis a purus id facilisis. Ut a viverra est. Sed quis
        quam quis mi molestie elementum vitae vel libero. Aenean mauris odio,
        lobortis sed suscipit id, sagittis id libero. Nunc odio mauris,
        pellentesque vitae lectus eget, volutpat dignissim quam. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nulla maximus metus et enim
        sagittis tempor sit amet sed orci. Duis et dignissim nulla. In id varius
        turpis. Fusce vitae dictum turpis. Phasellus efficitur tempus porta.
        Nunc in nisi in magna varius convallis. Nam felis nibh, tristique et
        hendrerit ut, sodales eget nisl. Donec mollis a purus id facilisis. Ut a
        viverra est. Sed quis quam quis mi molestie elementum vitae vel libero.
        Aenean mauris odio, lobortis sed suscipit id, sagittis id libero. Nunc
        odio mauris, pellentesque vitae lectus eget, volutpat dignissim quam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
        metus et enim sagittis tempor sit amet sed orci. Duis et dignissim
        nulla. In id varius turpis. Fusce vitae dictum turpis. Phasellus
        efficitur tempus porta. Nunc in nisi in magna varius convallis. Nam
        felis nibh, tristique et hendrerit ut, sodales eget nisl. Donec mollis a
        purus id facilisis. Ut a viverra est. Sed quis quam quis mi molestie
        elementum vitae vel libero. Aenean mauris odio, lobortis sed suscipit
        id, sagittis id libero. Nunc odio mauris, pellentesque vitae lectus
        eget, volutpat dignissim quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla maximus metus et enim sagittis tempor sit amet
        sed orci. Duis et dignissim nulla. In id varius turpis. Fusce vitae
        dictum turpis. Phasellus efficitur tempus porta. Nunc in nisi in magna
        varius convallis. Nam felis nibh, tristique et hendrerit ut, sodales
        eget nisl. Donec mollis a purus id facilisis. Ut a viverra est. Sed quis
        quam quis mi molestie elementum vitae vel libero. Aenean mauris odio,
        lobortis sed suscipit id, sagittis id libero. Nunc odio mauris,
        pellentesque vitae lectus eget, volutpat dignissim quam. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nulla maximus metus et enim
        sagittis tempor sit amet sed orci. Duis et dignissim nulla. In id varius
        turpis. Fusce vitae dictum turpis. Phasellus efficitur tempus porta.
        Nunc in nisi in magna varius convallis. Nam felis nibh, tristique et
        hendrerit ut, sodales eget nisl. Donec mollis a purus id facilisis. Ut a
        viverra est. Sed quis quam quis mi molestie elementum vitae vel libero.
        Aenean mauris odio, lobortis sed suscipit id, sagittis id libero. Nunc
        odio mauris, pellentesque vitae lectus eget, volutpat dignissim quam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
        metus et enim sagittis tempor sit amet sed orci. Duis et dignissim
        nulla. In id varius turpis. Fusce vitae dictum turpis. Phasellus
        efficitur tempus porta. Nunc in nisi in magna varius convallis. Nam
        felis nibh, tristique et hendrerit ut, sodales eget nisl. Donec mollis a
        purus id facilisis. Ut a viverra est. Sed quis quam quis mi molestie
        elementum vitae vel libero. Aenean mauris odio, lobortis sed suscipit
        id, sagittis id libero. Nunc odio mauris, pellentesque vitae lectus
        eget, volutpat dignissim quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla maximus metus et enim sagittis tempor sit amet
        sed orci. Duis et dignissim nulla. In id varius turpis. Fusce vitae
        dictum turpis. Phasellus efficitur tempus porta. Nunc in nisi in magna
        varius convallis. Nam felis nibh, tristique et hendrerit ut, sodales
        eget nisl. Donec mollis a purus id facilisis. Ut a viverra est. Sed quis
        quam quis mi molestie elementum vitae vel libero. Aenean mauris odio,
        lobortis sed suscipit id, sagittis id libero. Nunc odio mauris,
        pellentesque vitae lectus eget, volutpat dignissim quam. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nulla maximus metus et enim
        sagittis tempor sit amet sed orci. Duis et dignissim nulla. In id varius
        turpis. Fusce vitae dictum turpis. Phasellus efficitur tempus porta.
        Nunc in nisi in magna varius convallis. Nam felis nibh, tristique et
        hendrerit ut, sodales eget nisl. Donec mollis a purus id facilisis. Ut a
        viverra est. Sed quis quam quis mi molestie elementum vitae vel libero.
        Aenean mauris odio, lobortis sed suscipit id, sagittis id libero. Nunc
        odio mauris, pellentesque vitae lectus eget, volutpat dignissim quam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
        metus et enim sagittis tempor sit amet sed orci. Duis et dignissim
        nulla. In id varius turpis. Fusce vitae dictum turpis. Phasellus
        efficitur tempus porta. Nunc in nisi in magna varius convallis. Nam
        felis nibh, tristique et hendrerit ut, sodales eget nisl. Donec mollis a
        purus id facilisis. Ut a viverra est. Sed quis quam quis mi molestie
        elementum vitae vel libero. Aenean mauris odio, lobortis sed suscipit
        id, sagittis id libero. Nunc odio mauris, pellentesque vitae lectus
        eget, volutpat dignissim quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla maximus metus et enim sagittis tempor sit amet
        sed orci. Duis et dignissim nulla. In id varius turpis. Fusce vitae
        dictum turpis. Phasellus efficitur tempus porta. Nunc in nisi in magna
        varius convallis. Nam felis nibh, tristique et hendrerit ut, sodales
        eget nisl. Donec mollis a purus id facilisis. Ut a viverra est. Sed quis
        quam quis mi molestie elementum vitae vel libero. Aenean mauris odio,
        lobortis sed suscipit id, sagittis id libero. Nunc odio mauris,
        pellentesque vitae lectus eget, volutpat dignissim quam.
      </p>
    </div>
  );
}

export default ModalPage;
