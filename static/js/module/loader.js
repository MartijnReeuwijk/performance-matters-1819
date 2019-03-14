export function removeLoader() {
  const list = document.getElementById("list");
  const incident = document.getElementsByClassName("incident");
  if (incident) {
    list.removeChild(list.childNodes[1]);
  }
}
