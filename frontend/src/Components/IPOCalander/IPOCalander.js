import React, {useState, useEffect} from 'react'

export default function IPOCalander(props) {

  const [ipoData, setIpoData] = useState(null)

  useEffect(() => {
    fetch( `http://localhost:3000/ipoCalander`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setIpoData(data);
    })
  }, [])

    return (
        <>
            <h1>{ ipoData && ipoData.ipoCalendar[0].name} : {ipoData && ipoData.ipoCalendar[0].date}</h1>
            <h1>{ ipoData && ipoData.ipoCalendar[1].name} : {ipoData && ipoData.ipoCalendar[1].date}</h1>
            <h1>{ ipoData && ipoData.ipoCalendar[2].name} : {ipoData && ipoData.ipoCalendar[2].date}</h1>
            <h1>{ ipoData && ipoData.ipoCalendar[3].name} : {ipoData && ipoData.ipoCalendar[3].date}</h1>
            <h1>{ ipoData && ipoData.ipoCalendar[4].name} : {ipoData && ipoData.ipoCalendar[4].date}</h1>
            <h1>{ ipoData && ipoData.ipoCalendar[5].name} : {ipoData && ipoData.ipoCalendar[5].date}</h1>
            <h1>{ ipoData && ipoData.ipoCalendar[6].name} : {ipoData && ipoData.ipoCalendar[6].date}</h1>
            <h1>{ ipoData && ipoData.ipoCalendar[7].name} : {ipoData && ipoData.ipoCalendar[7].date}</h1>
            <h1>{ ipoData && ipoData.ipoCalendar[8].name} : {ipoData && ipoData.ipoCalendar[8].date}</h1>
        </>
    )
}
