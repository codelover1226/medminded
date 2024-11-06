// components/PdfViewer.tsx
import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import Image from 'next/image';

// Manually set the worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PdfViewerProps {
    pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
    const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.37);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const renderIdRef = useRef<number>(0);

    useEffect(() => {
        const loadPdf = async () => {
            try {
                const loadedPdf = await pdfjsLib.getDocument(pdfUrl).promise;
                setPdf(loadedPdf);
            } catch (error) {
                console.error('Error loading PDF:', error);
            }
        };
        loadPdf();
    }, [pdfUrl]);

    const renderPage = async (pageNum: number) => {
        if (!pdf || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        // Generate a unique render ID for each render attempt
        const renderId = ++renderIdRef.current;
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale });

        // Resize the canvas
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Start rendering and track the task
        const renderTask = page.render({ canvasContext: context, viewport });

        try {
            await renderTask.promise;
        } catch (error) {
            // Only log the error if it is NOT a cancellation due to renderId mismatch
            if (renderIdRef.current === renderId) {
                console.error('Rendering error:', error);
            }
        }
    };

    // Re-render the page when `pdf`, `pageNumber`, or `scale` changes
    useEffect(() => {
        if (pdf) renderPage(pageNumber);
    }, [pdf, pageNumber, scale]);

    const handlePreviousPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () => setPageNumber((prev) => (pdf ? Math.min(prev + 1, pdf.numPages) : prev));
    const handleZoomIn = () => setScale((prev) => prev + 0.25);
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));

    return (
        <div>
            <div className='flex flex-row-reverse items-center gap-3 p-2'>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                    <button onClick={handlePreviousPage} disabled={pageNumber <= 1}>Previous</button>
                    <span style={{ margin: '0 15px' }}>Page {pageNumber} of {pdf?.numPages || '...'}</span>
                    <button onClick={handleNextPage} disabled={pdf ? pageNumber >= pdf.numPages : true}>Next</button>
                </div>
                <div className='cursor-pointer ' onClick={handleZoomOut}><Image src={'/assets/images/zoom_out.png'} alt='pan_tool' width={24} height={24} /></div>
                <div className='cursor-pointer' onClick={handleZoomIn}><Image src={'/assets/images/zoom_in.png'} alt='pan_tool' width={24} height={24} /></div>
                <div className='cursor-pointer'><Image src={'/assets/images/pan_tool.png'} alt='pan_tool' width={24} height={24} /></div>
            </div>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default PdfViewer;
