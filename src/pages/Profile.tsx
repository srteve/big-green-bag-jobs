
import { Layout } from "@/components/Layout";
import { ProfileSection } from "@/components/ProfileSection";

const Profile = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-bgb-600 mt-1">
            Manage your profile, experience, and job applications
          </p>
        </div>
        
        <ProfileSection />
      </div>
    </Layout>
  );
};

export default Profile;
