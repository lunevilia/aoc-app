import React, { useState } from 'react'
import MapContainer from './components/MapContainer'
import './LandingPage.css'

function LandingPage() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <div className='search'>
        <input placeholder="지역을 입력하세요" onChange={onChange} value={InputText} />
        <button type="submit">검색</button>
        </div>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  )
}

export default LandingPage
