import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './style.css';

const downloadQR = () => {
  const canvas = document.getElementById('qrCodeEl') as HTMLCanvasElement;
  const pngUrl = canvas.toDataURL('image/png');
  const downloadLink = document.createElement('a');
  downloadLink.href = pngUrl;
  downloadLink.download = 'qrCode.png';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const App: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div className="qr-code-generator-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="qr-input"
        placeholder="Introduce texto o enlace aquí..."
      />
      {text && (
        <>
          <QRCode
            id="qrCodeEl"
            value={text}
            size={256}
            level="H"
            className="qr-code"
          />
          <button onClick={downloadQR} className="download-button">
            Descargar QR
          </button>
        </>
      )}
    </div>
  );
};
