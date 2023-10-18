import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Pdfviewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin(
    )
    return (
        <div className='h-screen overflow-y'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="./ayodhya.pdf" plugins={[defaultLayoutPluginInstance]} />;
            </Worker>
        </div>
    )
}

export default Pdfviewer
