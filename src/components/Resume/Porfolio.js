import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Toss_DAE_Portfolio.pdf";
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
      {Array.from({ length: numPages - 1 }, (_, index) => ( //numPages
        <Page
          key={`page_${index + 1}`}
          pageNumber={numPages - index - 1}  // 페이지 번호 설정, 마지막 페이지 제외 // 기존 : index + 1
          scale={width > 786 ? 0.6 : 1.7}
        />
      ))}
    </Document>
  );
}

function Portfolio() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Col style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download Portfolio
        </Button>
      </Col>
      <Col className="resume">
        <PdfViewer file={pdf} />
      </Col>
    </Container>
  );
}

export default Portfolio;
