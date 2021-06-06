function callback(entries) {
  if (entries[0].isIntersecting) {
    window.scrollTo({top: Number(6200 - window.innerHeight), left: 0, behavior: 'smooth'});
  }
}
  const observer = new IntersectionObserver(callback);
  observer.observe(document.querySelector('#sensor'));

