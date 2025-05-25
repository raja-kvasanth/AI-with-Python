document.addEventListener('DOMContentLoaded', function() {
  // Get all sidebar items
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  
  // Get all topic content sections
  const topicContents = document.querySelectorAll('.topic-content');
  
  // Show the first topic by default
  topicContents[0].style.display = 'block';
  sidebarItems[0].style.backgroundColor = '#555';
  
  // Add click event listeners to sidebar items
  sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      sidebarItems.forEach(i => {
        i.style.backgroundColor = '';
      });
      
      // Add active class to clicked item
      this.style.backgroundColor = '#555';
      
      // Hide all content sections
      topicContents.forEach(content => {
        content.style.display = 'none';
      });
      
      // Show the corresponding content section
      const topicId = this.getAttribute('data-topic');
      document.getElementById(topicId).style.display = 'block';
    });
  });
});
