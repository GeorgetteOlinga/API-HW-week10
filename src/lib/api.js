const ROOT = "https://images-api.nasa.gov/search?q="

async function searchNasaImages(query) {
    const res = await fetch(ROOT + query)
    if (!res.ok) {
        console.log("Error fetching")
        console.log(res)
        return
    } 
    const data = await res.json()
    return data
}

export {
    searchNasaImages
}