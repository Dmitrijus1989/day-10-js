function nameReversed(name) {
  let newName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    newName = newName + name[i]
  }
  return newName;
}
console.log(nameReversed("Dmitrijus"));
/*-----------------------------------*/console.log("-----------------------------------")
function mynr(xx) {
  return xx*2
  // xx=xx*2
  // return xx
}
console.log(mynr(8));
/*-----------------------------------*/console.log("-----------------------------------")
function count(yy) {
  for (var i = 1; i <= yy; i++) {
    console.log(i);
  }
}
count(6);
count(4);
/*-----------------------------------*/console.log("-----------------------------------")
function sveikiname(zz) {
  let text = "";
  for (let i = 0; i < zz-1; i++) {
      text = text + "valio, "
  }
  return text+"valio!"
}
console.log(sveikiname(6));
/*-----------------------------------*/console.log("-----------------------------------")
function buildTriangle(ff) {
  let text = "";
  for (var i = 1; i <= ff; i++) {
    for (var y = 0; y <i; y++) {
      text = text+"*";
    }
    text = text+"\n";
  }
  return text
}
console.log(buildTriangle(20));
/*-----------------------------------*/console.log("-----------------------------------")
