
	let calculateBtn = document.getElementById("calculate-btn");
	let result = document.getElementById("result");
	let calculate = () => {
	  let p = Number(document.getElementById("principal").value);
	  let r = Number(document.getElementById("rate").value);
	  let rd = r/100;
	  let t = Number(document.getElementById("time").value);
	  let rt = rd*t;
	  let amount = p*(Math.exp(rt));
	  

  result.innerHTML = `<div>Population: <span>${p.toFixed(2)}</span></div>
  <div>Estimated Population: <span>${amount.toFixed(2)}</span></div>`;

};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);

