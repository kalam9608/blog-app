import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const userData = useSelector((state) => state.auth)

  const [value, setValue] = useState()

  useEffect(() => {
    setValue(userData?.userData?.user)
  }, [])

  return (<>
    <img src={`${value?.avatar}`} alt="image not found" />
  </>
  )
}

export default Home