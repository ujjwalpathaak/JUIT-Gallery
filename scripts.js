document.getElementById('sidebarBtn').addEventListener('click', openSidebar);
document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);

function openSidebar() {
  document.getElementById('sidebar').style.width = '250px';
  document.querySelector('.content').classList.add('content-shrink');
}

function closeSidebar() {
  document.getElementById('sidebar').style.width = '0';
  document.querySelector('.content').classList.remove('content-shrink');
}
