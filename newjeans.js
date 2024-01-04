	
	let calculateBtn1 = document.getElementById("calculate-btn1");
	let result1 = document.getElementById("result1");
	let calculate1 = () => {
	  let popu1 = Number(document.getElementById("population1").value);
	  let popu2 = Number(document.getElementById("population2").value);
	  let t1 = Number(document.getElementById("time1").value);
	  let pp = popu2/popu1;
	  let oms = (Math.log(pp)/t1)*100;
	  

  result1.innerHTML = `<div>Past Population: <span>${popu1.toFixed(2)}</span></div>
  <div>Growth Rate: <span>${oms.toFixed(2)}</span>%</div>`;

};
calculateBtn1.addEventListener("click", calculate1);
window.addEventListener("load", calculate1);

