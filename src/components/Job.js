import React from 'react'

function Job({ job }) {

    return (
        <p>
            <input type="checkbox" />
            {job.tyotehtava}, {job.osoite},
            <a href={job.linkki}> Lisätietoa</a>
        </p>
    )
}

export default Job;