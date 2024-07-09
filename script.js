document.addEventListener('DOMContentLoaded', (event) => {
    const repoOwner = 'pappykojo'; // Replace with your GitHub username
    const repoName = 'pappykojo.github.io'; // Replace with your repository name
    const branchName = 'main'; // Replace with your branch name

    const fileListElement = document.getElementById('fileList');

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents?ref=${branchName}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = item.html_url;
                link.textContent = item.name;
                listItem.appendChild(link);
                fileListElement.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching repository contents:', error);
        });
});
