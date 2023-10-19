"use client"
import React from 'react'
import Search from './search'
import Filter from './filter'
import List from './list'
const page = () => {
  return (
    <>
      <div className="flex p-4 divide-x-4">
        <div className="w-3/4 p-6 ">
          <Search/><br/>
          <List />
        </div>
        <Filter />
      </div>
    </>
  )
}

export default page
