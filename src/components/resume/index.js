import React from 'react';

// import fileDownload from 'js-file-download'
// import resumeUrl from '../../assets/resume.pdf';

// import PdfViewer from '../ui/PdfViewer';
import { PrimaryHeading } from '../ui/Headings';

import { Container } from './styled';

// import { name, CURRENT_DESIGNATION } from '../../constant';

const Resume = () => {

    // const download = () => {
    //     fileDownload(resumeUrl, `${ name } | ${ CURRENT_DESIGNATION } | Resume.pdf`);
    // }
    
    return (
        <Container>
            <PrimaryHeading width = "10%">Resume</PrimaryHeading>
            {/* <div style = {{ textAlign: 'center' }}>
                <Download onClick = { download.bind(this, resumeUrl) } > Download Resume </Download>
            </div>
            <PdfViewer url = { resumeUrl }/> */}
        </Container>
      );
}

export default Resume;