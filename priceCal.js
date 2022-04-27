function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseFloat(selectObj.options[selectObj.selectedIndex].value);
  console.log(selectObj)
 a = 0;
  if(eventId === 1)
  {
     a=Number(ticknum)*91.25;
  }
  if(eventId === 2)
  {
     a= Number(ticknum)*79.88;
  }
  if(eventId === 3)
  {
     a= Number(ticknum)*81.12;
  }
  if(eventId === 4)
  {
     a= Number(ticknum)*100;
  }
  
  return a;
}


