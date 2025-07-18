document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    fetchContent(url);
});

function fetchContent(url) {
    // In a real application, you would send this URL to your backend server
    // which would then fetch the content and return it to the frontend.
    // For demonstration purposes, we'll just display the URL.
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<p>Content from ${url} will be displayed here.</p>`;
}
