let a = 0;
let totalamount = document.getElementById("txt-amount");
let spanoutput = document.querySelectorAll("#output span")
let totalParagraph = document.querySelector("#total");

function get(target) {
      let value = target.getAttribute('data-value');

      let coinvalue = parseInt(value);
      a += coinvalue;
      totalamount.value = a + " Rs";

      spanoutput.forEach(span => {
            const spanValue = span.getAttribute('data-value');
            if (spanValue === value) {
                  let count = parseInt(span.textContent) || 0;
                  count++;
                  span.textContent = count;

            }
      });

      let totalCount = parseInt(totalParagraph.textContent) || 0;
      totalCount += coinvalue;
      totalParagraph.textContent = totalCount;



}
