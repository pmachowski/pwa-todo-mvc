export const initSW = () => {
  if ('serviceWorker' in navigator && !navigator.serviceWorker.controller) {
    navigator.serviceWorker.register('/service-worker.js', {scope: './'})
    .then(reg => console.log('ServiceWorker registration successful with scope: ', reg.scope))
    .catch(err => console.log('ServiceWorker registration failed: ', err))
  }
}
