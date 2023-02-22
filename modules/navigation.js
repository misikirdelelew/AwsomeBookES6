const linkN = document.querySelectorAll('nav > a');

const setActiveLink = (linkIndex) => {
  linkN.forEach((link) => {
    link.style.fontWeight = '';
    link.style.textDecoration = '';
    link.style.color = '';
  });
  linkN[linkIndex].style.fontWeight = 'bold';
  linkN[linkIndex].style.textDecoration = 'underline';
  linkN[linkIndex].style.color = 'blue';
};

const configureLinks = () => {
  linkN.forEach((link, index) => {
    link.addEventListener('click', () => {
      setActiveLink(index);
    });
  });
};

export { setActiveLink, configureLinks };
