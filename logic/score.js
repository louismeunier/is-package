export function getBestScore() {
    if (typeof window === 'undefined') return 0;
    return localStorage.getItem("package_best_score")
}

export function setBestScore(score) { 
    if (typeof window === 'undefined') return
    localStorage.setItem("package_best_score", score)
}