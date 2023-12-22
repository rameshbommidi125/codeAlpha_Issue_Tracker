function createIssue() {
    // Get form values
    const issueTitle = document.getElementById('issue-title').value;
    const issueDescription = document.getElementById('issue-description').value;
    const issuePriority = document.getElementById('issue-priority').value;
    const issueAssignee = document.getElementById('issue-assignee').value;
    const issueFile = document.getElementById('issue-file').value; // Note: File upload handling is more complex and requires additional logic

    // Create issue card
    const issueCard = document.createElement('div');
    issueCard.className = 'issue-card';
    issueCard.innerHTML = `
        <h3>${issueTitle}</h3>
        <p>${issueDescription}</p>
        <p><strong>Priority:</strong> ${issuePriority}</p>
        <p><strong>Assignee:</strong> ${issueAssignee}</p>
        <p><strong>File:</strong> ${issueFile}</p>
        <button type="button" onclick="updateIssue(this)">Update</button>
    `;

    // Append issue card to the list
    const issueList = document.getElementById('issue-list');
    issueList.appendChild(issueCard);

    // Clear form inputs
    document.getElementById('issue-title').value = '';
    document.getElementById('issue-description').value = '';
    document.getElementById('issue-priority').value = 'low';
    document.getElementById('issue-assignee').value = '';
    document.getElementById('issue-file').value = '';
}

function updateIssue(button) {
    // Simulate updating issue status
    const issueCard = button.parentNode;
    const statusParagraph = document.createElement('p');
    statusParagraph.innerHTML = '<strong>Status:</strong> In Progress';
    issueCard.appendChild(statusParagraph);
}