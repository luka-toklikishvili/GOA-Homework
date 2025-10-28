import { useEffect, useState } from "react"

export default function App() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch("https://api.unsplash.com/photos?per_page=30&client_id=YOUR_KEY", { signal })
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted")
        } else {
          console.error(err)
        }
      })
    return () => {
      controller.abort()
    }
  }, [])
  return <div>{photos.length} photos loaded</div>
}






