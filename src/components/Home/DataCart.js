import React from 'react';

const DataCart = ({ allData }) => {
    console.log(allData)
    return (
        <div>
            <div style={{ border: "1px solid black"}}>
                <img style={{height:"200px",width:"200px"}} className="img-fluid text-center" src={allData.links.mission_patch} alt="" />
            </div>
            <div>
                {allData.mission_name}
                #{allData.flight_number}
                <br />
                <span style={{ fontWeight: "bold" }}>Launch Year</span> :{allData.launch_year}
                <br />
                <span style={{ fontWeight: "bold" }}>Launch success</span> :{allData.launch_success + ''}
                <br />
                <span style={{ fontWeight: "bold" }}>Land success </span> :{allData.land_success || <p>data is missing</p>}
            </div>
            <div>

            </div>
        </div>
    );
};

export default DataCart;