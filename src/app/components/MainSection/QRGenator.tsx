import React, {  useState } from 'react'

function QRGenator() {

  const [url, setUrl] = useState('');

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Ok');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='url' name='url' value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Enter Url To generate QR Code' />
        <input type='submit' value="Generate QR Code" />
      </form>
      {/* <img src={`'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='https://google.com'`} alt='not'/> */}
    </div>
  )
}

export default QRGenator