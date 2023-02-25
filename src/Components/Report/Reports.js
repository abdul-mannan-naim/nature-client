import React, { useEffect, useState } from 'react';
import Report from './Report';

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch('https://nature-server.vercel.app/reports')  
            .then(res => res.json())
            .then(data => setReports(data))
    }, [reports])



    return (
        <div className=' flex justify-center'>
            <div className='grid grid-cols-3 gap-3'>
                {
                    reports.map(r => <Report
                        key={r._id}
                        r={r}
                    ></Report>)
                }
            </div>
        </div>
    );
};

export default Reports;