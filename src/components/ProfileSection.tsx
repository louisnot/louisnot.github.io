import React from "react";

interface ProfileSectionProps {
    profilePicUrl: string;
    currentFollowers: number;
    goalFollowers: number;
    previousGoal: number;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
    profilePicUrl,
    currentFollowers,
    goalFollowers,
    previousGoal
}) => {
    const progress =
        ((currentFollowers - previousGoal) / (goalFollowers - previousGoal)) * 100;
    const progressPercent = Math.min(Math.max(progress, 0), 100);

    return (
        <section className="w-96">
            <div className="w-full mx-auto flex flex-col items-center gap-6 p-6">
                <a href="https://www.instagram.com/louis.not/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={profilePicUrl}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-amber-500 shadow hover:scale-105 transition-transform"
                    />
                </a>
                <div className="w-full px-4">
                    <div className="flex justify-between text-sm text-gray-600 font-medium mb-1">
                        <span>{currentFollowers} followers</span>
                        <span>Goal: {goalFollowers}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-5 rounded-full">
                        <div
                            className="h-5 bg-amber-500 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
