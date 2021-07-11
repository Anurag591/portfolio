
import React ,{ useState } from 'react';

import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';


const PDFViewer = ( { url } ) => {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [viewPdf] = useState(url);

    return <>
        {
            viewPdf&&<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            {/* <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]}  /> */}
            <Viewer fileUrl={ viewPdf } />
            </Worker>
        }
    </>
};

export default PDFViewer;
