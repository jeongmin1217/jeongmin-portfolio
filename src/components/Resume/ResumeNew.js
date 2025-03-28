import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Toss_DAE_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer({ file }) {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    return () => {
      setNumPages(null);  // 컴포넌트가 언마운트될 때 상태 초기화
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className="d-flex flex-column align-items-center">
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          scale={width > 786 ? 1.7 : 0.6}
        />
      ))}
    </Document>
  );
}

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Col style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Col>
      <Col className="resume">
        <PdfViewer file={pdf} />
      </Col>
    </Container>
  );
}

export default ResumeNew;
