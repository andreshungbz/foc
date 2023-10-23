import { profiles } from "@/utils/data";
import ProfileItem from "@/components/ProfileItem";

export const metadata = {
  title: "Dev Team",
  description:
    "Group members for the final project in the Fundamentals of Computing course [CMPS1134-2]",
};

export default function Team() {
  return (
    <div>
      <h1>Dev Team</h1>
      <p className="mb-4">
        Below are the group members for this final project, each who have
        created their own respecitve websites. Check them out by clicking on the
        profiles below!
      </p>
      <div className="profile-section">
        {profiles.map((profile) => {
          return <ProfileItem key={profile.name} {...profile} />;
        })}
      </div>
    </div>
  );
}
