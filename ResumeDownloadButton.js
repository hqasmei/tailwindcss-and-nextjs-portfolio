import React from 'react';

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/your-resume-file.pdf';
    downloadLink.download = 'your-resume-file.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button
      className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};

export default ResumeDownloadButton;
