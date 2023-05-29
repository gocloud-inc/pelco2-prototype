export default function Sidebar() {
    const toggleSidebarbutton = document.getElementById('toggle-sidebar');
    const sidebarWrapper = document.querySelector('.sidebar-wrapper');
    const hasSideMenus = document.querySelectorAll('.has-sub-menu');

    let openSubMenu = null;

    const toggleSubMenu = (event) => {
        event.preventDefault();
        const parentListItem = event.target.closest('li');
        const subSideMenu = parentListItem.querySelector('.aside-sub-menu');
        
        // close the previously opened sub-menu (if any)
        if (openSubMenu && openSubMenu !== subSideMenu) {
            openSubMenu.classList.remove('show');
        }

        // toggle the clicked sub-menu
        subSideMenu.classList.toggle('show');
        
        // update the currently opened sub-menu
        openSubMenu = subSideMenu;        
    }

    const toggleSidebar = () => {
        sidebarWrapper.classList.toggle('show');
        
        // Create a new div overlay
        const overlayDiv = document.createElement('div');

        // Set some properties on the div, such as its class and text content
        overlayDiv.className = 'overlay';

        // Add a click event listener to the overlay to close the sidebar when clicked
        overlayDiv.addEventListener('click', () => {
            sidebarWrapper.classList.remove('show');
            document.body.removeChild(overlayDiv);
        });

        // Append the new div to the body of the document
        document.body.appendChild(overlayDiv);
    }

    // Event Listeners
    hasSideMenus.forEach((hasSideMenu) => {
        hasSideMenu.addEventListener('click', toggleSubMenu);
    });

    toggleSidebarbutton.addEventListener('click', toggleSidebar);
}