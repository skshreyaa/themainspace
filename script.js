document.getElementById('startPresentation').addEventListener('click', function() {
    document.get ElementById('home').classList.add('hidden');
    document.getElementById('presentation').classList.remove('hidden');
});

document.getElementById('seminarReport').addEventListener('click', function() {
    window.location.href = 'seminar-report.html'; // Redirect to seminar report page
});

document.getElementById('backToHome').addEventListener('click', function() {
    document.getElementById('presentation').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
});
