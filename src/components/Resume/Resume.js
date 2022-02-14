import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
import resume from './../../documents/Mark Tao_resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudfare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    return (
        <div>
            <h1>
                A little more about me...
            </h1>
            <p>
                Hey everyone, my name is Mark and I'm from Dallas, TX, originally! I am a current junior at Dartmouth majoring in computer science
                and government! I actually took the DALI web design course last winter and really enjoyed it, but wasn't able to commit too much time too
                sharpening my software development skillset. However, I've recently re-taken an interest in the field and would love to continue to strengthen my knowledge
                in it, which is why I'm currently applying to DALI. I have gotten to know a little bit more about the lab (as well as the people in it), and I really 
                enjoy the collaborative and supportive nature of the place. I am also aware that the lab provides lots of learning opportunities in a variety of different fields,
                and I would love to continue to take advantage of those opportunities.

                Fun fact: I have visited every continent except Antarctica!
            </p>
            <h1>
                Resume
            </h1>
            <div>
                <Document
                file = {resume}
                onLoadError = {console.error}
                style = {{ width: '100vw', height: 'auto'}}>
                    <Page pageIndex={0}/>
                </Document>
            </div>
        </div>
    );
}

export default Resume;