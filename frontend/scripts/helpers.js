export const appendStyle = (sheetName) => {
  const lastLink = document.head.childNodes[document.head.childNodes.length - 1]
  lastLink.remove()
  const link = `<link rel="stylesheet" href="./styles/${sheetName}">`;
  document.head.insertAdjacentHTML("beforeend", link);
};

export const toastGenerator = (image, heading, message) => `
  <div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-bs-autohide="false">
    <div class="toast-header">
      ${image ? `<img src=${image} class="rounded me-2" alt="...">` : ''}
      ${heading ? `<strong class="me-auto">${heading}</strong>` : ''}
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      ${message}
    </div>
  </div>
`

export const clearMain = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";
}