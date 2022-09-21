import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Weather() {
    const { data, error } = useSWR('http://api.openweathermap.org/data/2.5/weather?lat=35.0457219&lon=-85.3094883&appid=KEYGOESHERE&units=imperial', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <p>Current Chattanooga Weather: {data.main.temp}° / {data.weather[0].description}</p>
        </div>
    )
}
