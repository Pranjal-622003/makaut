import React from 'react'

const Herosection = () => {
    return (
              <>

            <div className="flex flex-row px-4 py-4 space-x-5 place-items-center mx-9 my-7 place-content-center">
                <select className="w-full max-w-xs select select-primary">
                    <option disabled selected>Choose Your Department</option>
                    <option>CSE</option>
                    <option>IT</option>
                    <option>ECE</option>
                    <option>FT</option>
                </select>

                <select className="w-full max-w-xs select select-primary">
                    <option disabled selected>Choose Your Semester</option>
                    <option>SEM 1</option>
                    <option>SEM 2</option>
                    <option>SEM 3</option>
                    <option>SEM 4</option>
                </select>
            </div>





        </>
    )
}

export default Herosection
