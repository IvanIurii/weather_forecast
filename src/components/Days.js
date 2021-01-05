import React from "react"


const Days = (props) =>
    (
        <>
            <h6>Погода на ближайщие дни:</h6>
            <table className="tg">
                <thead>
                <tr>
                    {/*1 Day*/}
                    <th className="tg-0lax">
                        First Day
                        <h1>{props}</h1>
                    </th>
                    {/*2 Day*/}
                    <th className="tg-0lax">2</th>
                    {/*3 Day*/}
                    <th className="tg-0lax">3</th>
                    {/*4 Day*/}
                    <th className="tg-0lax">4</th>
                    {/*5 Day*/}
                    <th className="tg-0lax">5</th>
                </tr>
                </thead>
            </table>
        </>
    );


export default Days
