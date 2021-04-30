function changeOuterLinks() {
    const links = document.querySelectorAll('nav#link-list a');
    for (let i = 0; i < links.length; i++) {
        if (links[i].innerHTML.includes('outer-link')) {
            links[i].setAttribute('target', '_blank');
            links[i].innerHTML = `<strong>${links[i].innerHTML}</strong>`;
        }
    }
    const firstNav = document.getElementsByTagName('nav')[0];
    firstNav.style.display = 'flex';
    firstNav.style.flexDirection = 'column';
    firstNav.style.width = '30%';
    firstNav.style.margin = '0 auto';
    firstNav.style.border = '1px solid blue';
    firstNav.style.padding = '16px';
}


export { changeOuterLinks };