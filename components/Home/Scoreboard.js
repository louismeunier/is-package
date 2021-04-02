export default function Scoreboard(props) {
    return (
        <div 
            className="w-1/2 grid grid-cols-2 gap-4 m-2"
        >
            <div className="bg-gray-200 border-4 border-gray-400 rounded-2xl text-center">
                <h1 className="font-bold">Current Streak</h1>
                <h1>{props.currentStreak}</h1>
            </div>
            <div className="bg-gray-200 border-4 border-gray-400 rounded-2xl text-center">
                <h1 className="font-bold">Best Streak</h1>
                <h1>{props.bestStreak}</h1>
            </div>
        </div>
    )
}