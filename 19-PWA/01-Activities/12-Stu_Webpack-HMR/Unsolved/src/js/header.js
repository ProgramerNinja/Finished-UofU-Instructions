export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'yellow') {
    header.style.color = 'blue';
  } else {
    header.style.color = 'yellow';
  }
};
// TODO: Try changing the 'blue' to 'orange' to see if hot reloading works