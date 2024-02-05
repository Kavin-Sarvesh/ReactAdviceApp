import { useState } from "react"


export const QrCode = () => {
    const [img, setImg] = useState("images/4.svg")
    const [loading, setLoading] = useState(false)
    const [qrData, setqrData] = useState("kavin")
    const [qrsize, setQrsize] = useState("150")
    async function generateQR() {
        setLoading(true)
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrData)}`
            setImg(url)
        } catch (error) {
            console.error("Error generating QR code", error)
        } finally {
            setLoading(false)
        }
    }
    function downloadQR() {
        fetch(img).then((response) => response.blob()).then((blob) => {
            const link= document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download="qrcode.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
        .catch((error) => {
            console.error("Error downloading QR code", error)
        })
    }
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className="qr-code-image"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">Data for QrCode:
            </label>
            <input type="text" id="dataInput" placeholder="Enter data for QR code" value={qrData} onChange={(e)=>setqrData(e.target.value)}/>
            <label htmlFor="sizeInput" className="input-label">Image size (eg., 150):
            </label>
            <input type="text" id="sizeInput" placeholder="Enter image size" value={qrsize} onChange={(e)=>setQrsize(e.target.value)}/>
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR code</button>
            <button className="download-button" onClick={downloadQR}>Download QR code</button>
        </div>
        <p className="footer">
            Designed by <a href="https://github.com/Kavin-Sarvesh">Sarvesh</a>
        </p>
    </div>
  )
}
