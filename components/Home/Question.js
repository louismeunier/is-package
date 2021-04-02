import { useState, useEffect } from 'react'
import Scoreboard from "./Scoreboard"
import NPMQuery from "../../logic/npm-api"
import randomWord from "random-words"
import Head from 'next/head'

export default function Question() {
    const [currentPackage, setCurrentPackage] = useState(null);
    const [isPackage, setIsPackage] = useState(null);

    const [currentStreak, setCurrentStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    const [backgroundColor, setBackgroundColor] = useState("gray-300");
    useEffect(() => {
        generateNewPackage();
    }, [])

    const generateNewPackage = () => {
        const newWord = randomWord();
        setCurrentPackage(newWord)
        NPMQuery(newWord)
            .then(res => {
                res.code == 'NOT_FOUND' 
                ? setIsPackage(false)
                : setIsPackage(true)
            })
            .catch(err => {
                setIsPackage(false)
            })
    }

    const animateResponse = bool => {
        const BKD = "gray-300";
        const COLOR = bool ? "green-100" : "red-100";
        setBackgroundColor(COLOR);
        setTimeout(() => {
            setBackgroundColor(BKD)
        },500);
    }

    const handleOption = bool => {
        if (bool == isPackage) {
            animateResponse(true);
            setCurrentStreak(currentStreak+1);
        } else {
            animateResponse(false);
            if (currentStreak > bestStreak) {
                setBestStreak(currentStreak);
            }
            setCurrentStreak(0); 
        }
        generateNewPackage();
    }

    return (
        <>
            <Head>
                <title>Is {currentPackage} an NPM package?</title>
            </Head>
            <div className={`rounded-xl shadow-xl m-10 bg-${backgroundColor} text-center p-2`}>
                <div className="h-1/6 flex flex-col items-center justify-around">
                    <h1 className="text-4xl">is <em className="font-bold">{currentPackage}</em> an NPM package?
                    </h1>
                    <Scoreboard currentStreak={currentStreak} bestStreak={bestStreak}/>
                </div>

                <div className="w-full h-5/6 grid-cols-2 gap-2 grid"> 
                    <div 
                        onClick={() => handleOption(true)}
                        className="bg-green-400 shadow-xl border-8 rounded-lg border-green-600 delay-100 hover:bg-green-500 cursor-pointer "
                    >
                    </div>
                    <div 
                        onClick={() => handleOption(false)}
                        className="bg-red-400 shadow-xl border-8 border-red-600 rounded-lg delay-100 hover:bg-red-500 cursor-pointer"
                    >
                    </div>
                </div>
            </div>
        </>
    )
}