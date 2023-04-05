function sumTable() {
  const sum = document.getElementById("sum");
  const tableRows = Array.from(document.querySelectorAll("td"));
  let res = 0;

  for (let i = 0; i < tableRows.length; i++) {
    if (i % 2 == 1) {
      res += Number(tableRows[i].textContent);
    }
  }
  sum.textContent = res;
}
