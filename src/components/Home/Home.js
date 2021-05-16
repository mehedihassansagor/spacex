import React, { useEffect, useState } from 'react';
import DataCart from './DataCart';
import './Home.css'
import yearData from '../../components/Data/Data.json'
import landing from '../../components/Data/Landing.json'

const Home = () => {

    //all data

    const [datum, setDatum] = useState([])
    console.log(datum)
    console.log('data by year', datum)
    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches?limit=100')
            .then(res => res.json())
            .then(data => setDatum(data))
    }, [])

    //this is filtering part
    const [landData, setLandData] = useState(true)
    const handleLand = (status) =>{
        setLandData(status)
    }
     useEffect(()=>{
         fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${landData}`)
         .then(res => res.json())
         .then(data => setDatum(data))
     },[landData])


 
     const [launched,setLaunched] = useState(true)
     const handleLaunched =(status) =>{
        setLaunched(status)
     }
     useEffect(()=>{
        fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launched}`)
        .then(res => res.json())
        .then(data => setDatum(data))
    },[launched])

    const [year, setYear] = useState('');

    const handleYear = year => {
        setYear(year.year);
        console.log(year.year)
    }


    useEffect(() => {
        const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setDatum(data))
    }, [year]);


    
    return (

        <section className="container mt-5 bg-light">
            <section className="row">
                <div className="col-md-3">
                    <div>
                    {
                        yearData.map(year =>

                            <div className="row">
                                <button onClick={() => handleYear(year)} type="button" className="btn btn-outline-success col-md-6 mt-2">{year.year}</button>
                            </div>
                        )
                    }
                    </div>
                    <div>
                    {
                        landing.map(landData =>

                            <div className="row">
                                <button onClick={()=>handleLand(landData.status) }type="button" className="btn btn-outline-success col-md-6 mt-2">{landData.status}</button>
                            </div>
                        )
                    }
                    </div>
                    <div>
                    {
                        landing.map(landData =>

                            <div className="row">
                                <button onClick={()=>handleLaunched(landData.status) }type="button" className="btn btn-outline-success col-md-6 mt-2">{landData.status}</button>
                            </div>
                        )
                    }
                    </div>
                    
                </div>
                <div className=" allData col-md-9" >

                    {/* data part */}
                    {
                        datum.map(allData => <DataCart allData={allData}> </DataCart>)
                    }

                </div>
            </section>
        </section>
    );
};

export default Home;