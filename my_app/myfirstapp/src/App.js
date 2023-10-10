import React from "react"
import { v4 as uuid } from "uuid"

const App = () => {
  // some data without anything which could be used for the keys
  const names = ["antonello", "mike", "jason", "peter"]
  // now we will have an array of objects for evey name with id and name itself
  let namesWithIds = names.map((ele) => ({ id: uuid(), name: ele }))

  const renderNames = namesWithIds.map((item) => {
    // and we have a unique key now
    return <h1 key={item.id}> Hello {item.name}</h1>
  })

  return <div> {renderNames} </div>
}

export default App