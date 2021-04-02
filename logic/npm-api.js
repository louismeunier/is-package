export default function NPMQuery(query) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.npms.io/v2/package/${query}`)
            .then(res => res.json())
            .then(jsonResponse => resolve(jsonResponse))
            .catch(err => {
                reject(err)
            })
    })
}