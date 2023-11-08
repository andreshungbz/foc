import Image from "next/image";

export default function ProfileItem({
  name,
  title,
  biography,
  image,
  github,
  project,
}) {
  return (
    <div className="profile">
      <div>
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <div className="flex flex-col">
        <h2>{name}</h2>
        <div className="profile-title">{title}</div>
        <p className="biography">{biography}</p>
        <div>
          <a href={project} target="_blank">
            <div className="profile-link">FOC Website</div>
          </a>
          <a href={github} target="_blank">
            <div className="profile-link">GitHub</div>
          </a>
        </div>
      </div>
    </div>
  );
}
