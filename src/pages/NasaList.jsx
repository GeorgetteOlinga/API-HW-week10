/*
    EXAMPLE item
    {
  "href": "https://images-assets.nasa.gov/image/PIA01973/collection.json",
  "data": [
    {
      "center": "JPL",
      "title": "Saturn Atmosphere",
      "nasa_id": "PIA01973",
      "date_created": "1999-06-16T10:03:17Z",
      "keywords": [
        "Saturn",
        "Voyager"
      ],
      "media_type": "image",
      "description_508": "Saturn Atmosphere",
      "secondary_creator": "NASA/JPL",
      "description": "Saturn Atmosphere"
    }
  ],
  "links": [
    {
      "href": "https://images-assets.nasa.gov/image/PIA01973/PIA01973~thumb.jpg",
      "rel": "preview",
      "render": "image"
    }
  ]
}
*/

import { searchNasaImages } from "../lib/api"
import { useState } from "react"
import Result from "../components/Result"

export default function NasaList() {

    const [results, setResults] = useState(null)
    const [loading, setLoading] = useState(false)

    async function handleForm(e) {
        setLoading(true)
        e.preventDefault()
        const query = e.target.query.value
        const data = await searchNasaImages(query)
        if (!data) {
            // handle none found here
            return
        }
        setResults(data.collection.items)
        setLoading(false)
    }

  return (
    <>
        <h2>NasaList</h2>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="search-query">Search images from NASA</label>
                <input type="text" id="search-query" name="query" />
            </div>
            <button>Search</button>
        </form>
        {loading && (
            <>
                Loading...
            </>
        )}
        {results && (
            <section>
                <h3>Results</h3>
                <ul id="search-results">
                    {results
                        .filter(r => {
                            return  r.data && 
                                    r.data.length > 0 &&
                                    r.links &&
                                    r.links.length > 0
                        })
                        .map((r, i) => (
                        <Result 
                            key={r.data.nasa_id+"-"+i} 
                            result={r} 
                            />
                    ))}
                </ul>
            </section>
        )}
    </>
  )
}