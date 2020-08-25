import React from 'react'

function Job({ job }) {

    return (
        <table>
            <tbody>
                <tr>
                    <td width="1%">
                        <input type="checkbox" />
                    </td>
                    <td width="59%">
                        {job.tyotehtava}
                    </td>
                    <td width="20%">
                        {job.osoite}
                    </td>
                    <td width="20%">
                        <a href={job.linkki}> Lisätietoa</a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Job;