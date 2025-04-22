type GiveawayWinners = {
    date: string;
    winner: string;
    prize: string;
    goal: number;
    link: string;
    followerNumber: number
    followingSince: number
};

type Props = {
    winners: GiveawayWinners[];
};

export default function HallOfFame({ winners }: Props) {
    return (
        <section className="w-full bg-white py-8 px-4 mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">🏆 Hall of Fame</h2>
            <div className="relative border-l-2 border-amber-500 pl-6 space-y-6 max-w-xl mx-auto">
                {winners.map((entry, index) => {
                    const followingSince = new Date(entry.followingSince * 1000).toLocaleDateString("en-GB", {
                        weekday: "short",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    });
                    return (
                        <div key={index} className="relative">
                            <div className="absolute -left-[1.125rem] w-6 h-6 bg-amber-500 rounded-full border-4 border-white"></div>
                            <div className="pl-4">
                                <p className="text-sm text-gray-500">{entry.date}</p>
                                <p className="font-semibold">
                                    <a
                                        href={entry.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        @{entry.winner}
                                    </a>{" "}
                                    won {entry.prize} for me reaching {entry.goal} followers 🎉
                                </p>
                                <p className="text-sm text-amber-600 font-semibold italic">
                                    Follower #{entry.followerNumber} — Following since: {followingSince}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
