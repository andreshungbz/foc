import Image from "next/image";

export default function ConceptItem({ name, title, description, image, link }) {
  return (
    <a href={link} target="_blank">
      <div className="concept">
        <div>
          <Image src={image} alt={title} width={300} height={300} />
        </div>
        <div className="info">
          <h2 className="title">{title}</h2>
          <p className="author">{name}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </a>
  );
}
