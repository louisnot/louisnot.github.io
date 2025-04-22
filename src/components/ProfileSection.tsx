import React from "react";

interface ProfileSectionProps {
    profilePicUrl: string;
    currentFollowers: number;
    goalFollowers: number;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
    profilePicUrl,
    currentFollowers,
    goalFollowers,
}) => {
    const progressPercent = Math.min(
        (currentFollowers / goalFollowers) * 100,
        100
    );

    return (
        <section className="flex flex-col items-center gap-6 p-6 bg-white rounded-2xl shadow-md w-full max-w-2xl mx-auto">
            <img
                src={profilePicUrl}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-500 shadow"
            />
            <div className="w-full">
                <div className="flex justify-between text-sm text-gray-600 font-medium mb-1">
                    <span>{currentFollowers} followers</span>
                    <span>Goal: {goalFollowers}</span>
                </div>
                <div className="w-full bg-gray-200 h-4 rounded-full">
                    <div
                        className="h-4 bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
