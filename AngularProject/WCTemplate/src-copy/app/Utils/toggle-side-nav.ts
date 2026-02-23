export function ToggleSideNav(): void {
  const sideNav = document.getElementById('side-nav');
  sideNav?.classList.add('side-nav-state');
  console.log('Toggled Side Nav');
}
