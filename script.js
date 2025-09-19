function generateMemo() {
  let date = document.getElementById('dateInput').value;
  let hrQty = parseFloat(document.getElementById('hrQty').value) || 0;
  let brQty = parseFloat(document.getElementById('brQty').value) || 0;
  let headQty = parseFloat(document.getElementById('headQty').value) || 0;
  let hrPrice = parseFloat(document.getElementById('hrPrice').value) || 0;
  let brPrice = parseFloat(document.getElementById('brPrice').value) || 0;
  let commissionRate = parseFloat(document.getElementById('commissionRate').value) || 0;
  let paid = parseFloat(document.getElementById('paid').value) || 0;

  let commission = commissionRate * (hrQty + brQty - headQty);
  let total = hrPrice + brPrice + commission;
  let due = total - paid;

  document.getElementById('memo').innerHTML = `
    <h3>🧾 মেমো</h3>
    <p><b>তারিখ:</b> ${date || "তারিখ দেওয়া হয়নি"}</p>
    <p>Harunur Rashid মালের দাম: ${hrPrice} টাকা</p>
    <p>Brother's মালের দাম: ${brPrice} টাকা</p>
    <p>কমিশন (${commissionRate}%): ${commission} টাকা</p>
    <hr>
    <p><b>মোট:</b> ${total} টাকা</p>
    <p><b>পরিশোধ:</b> ${paid} টাকা</p>
    <p><b>মোট বাকি:</b> ${due} টাকা</p>
  `;
}
