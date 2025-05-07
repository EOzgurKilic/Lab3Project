function downloadVideo(event, fileName) {
    event.preventDefault();
  
    const link = document.createElement('a');
    link.href = `${fileName}`;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  