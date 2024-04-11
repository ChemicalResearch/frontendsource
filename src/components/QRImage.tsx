import { FC } from "react";

function getFileNameFromUrl(url: string): string {
    try {
        const parsedUrl = new URL(url);
        const path = parsedUrl.pathname;
        const parts = path.split('/');
        const fileName = parts[parts.length - 1];
        return fileName;
    } catch (error) {
        console.error('Error parsing URL:', error);
        return Date.now() + ".jpg";
    }
}

const QRImage: FC<{ image: string }> = ({ image }) => {

    const handleDownload = () => {
        fetch(image) // Replace with the URL of your image
            .then(response => response.blob())
            .then(blob => {

                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', getFileNameFromUrl(image)); // Set the filename here
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            });
    }

    return (
        <div className="relative w-fit">
            <img src={image} />
            <button className="absolute top-1 right-1 z-50 bg-slate-100 p-1 rounded" onClick={handleDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </button>
        </div>
    )
}

export default QRImage;