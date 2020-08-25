import React from 'react'

function Jobs({ jobs }) {

    const rows = () => jobs.map(job => {
        return <p><input type="checkbox" />{job.tyotehtava}, {job.osoite},<a href={job.linkki}> Lisätietoa</a></p>
    })

    return (
        <div>
            {rows()}
        </div>
    )
}

export default Jobs;