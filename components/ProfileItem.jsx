import Image from "next/image";

export default function ProfileItem({ name, biography, image, link }) {
  return (
    <a href={link} target="_blank">
      <div className="profile">
        <div>
          <Image src={image} alt={name} width={500} height={500} />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <p>{biography}</p>
        </div>
      </div>
    </a>
  );
}
