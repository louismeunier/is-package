export default function Scoreboard(props) {
    const npmJS = (pkg) => {return `https://www.npmjs.com/package/${pkg}`}
    return (
        <div 
            className="w-1/2 grid grid-cols-3 gap-4 m-2"
        >
            <div className="bg-gray-200 border-4 border-gray-400 rounded-2xl text-center">
                <h1 className="font-bold">Current Streak</h1>
                <h1>{props.currentStreak}</h1>
            </div>
            <div className="bg-gray-200 border-4 border-gray-400 rounded-2xl text-center">
                <h1 className="font-bold">Previous Question</h1>
                {
                    props.previous.isPackage 
                    ? (
                        <h1 className="text-green-500 underline">
                            <a href={npmJS(props.previous.name)} target="_blank" rel="no_referrer">
                                {props.previous.name}
                            </a>
                        </h1>
                    )
                    : (
                        <h1 className={props.previous.name ? "text-red-500 line-through" : "text-black"}>
                            {props.previous.name ? props.previous.name : "-"}
                        </h1>
                    )
                }
            </div>
            <div className="bg-gray-200 border-4 border-gray-400 rounded-2xl text-center">
                <h1 className="font-bold">Best Streak</h1>
                <h1>{props.bestStreak}</h1>
            </div>
        </div>
    )
}