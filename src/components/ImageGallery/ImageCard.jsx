import s from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={s.imageCard} onClick={() => openModal(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.imageCardImg}
      />
    </div>
  );
};

export default ImageCard;
