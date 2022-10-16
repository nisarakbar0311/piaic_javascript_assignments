const NCName = 'nisar akbar';
function toTitleCase (str) {
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
   
   return str.replace(/\w\S*/g,
  function(txt){return txt.charAt(0).toUpperCase() +
         txt.substr(1).toLowerCase();});
}
console.log(NCName.toLowerCase());
console.log(NCName.toUpperCase());
console.log(toTitleCase(NCName));