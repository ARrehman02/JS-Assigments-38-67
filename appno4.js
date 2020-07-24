

// function mainContent(){
//     var main = document.getElementById("main-content")
//    var display = main.innerHTML;
//    document.write(display)
// }
// mainContent()



// function mainContent() {
//     var main = document.getElementById("main-content").children;
//     var txt = "";
//     for (var i = 0; i < main.length; i++) {
//       txt = txt + main[i].tagName + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
//   }




// function mainContent() {
//     var main = document.getElementsByClassName("render");
//     var txt = "";
//     for (var i = 0; i < main.length; i++) {
//       txt = txt + main[i].tagName + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
//   }



// function mainContent(){
//    document.getElementById("first-name").value="ahmed";

// }
// mainContent()



// function mainContent(){
//     document.getElementById("last-name").value="anis";
//     document.getElementById("email").value="ansamd4";
// }
// mainContent()





// function nodeType(){
//     var x = document.getElementById("form-content").nodeType;
//   document.write(x)
// }
// nodeType()



// function nodeType(){
//     var x = document.getElementById("lastName").nodeType;
//   document.write(x)
// }
// nodeType()



// function updateChild() {
//         var elmnt = document.createElement("p");
//         var textnode = document.createTextNode("Last Name: ahmed");
//         elmnt.appendChild(textnode);
      
//         var item = document.getElementById("lastName");
//         item.replaceChild(elmnt, item.childNodes[0]);
// }
// updateChild()



// function targetNode(){
//     var firstchild = document.getElementById("main-content");
//     document.write(firstchild.firstChild.nodeName)
//     document.write(firstchild.lastChild.nodeName)
// }
// targetNode()



// function targetNode(){
//     var nextt = document.getElementById("lastName");
//     var prev = document.getElementById("lastName");
//     document.write(nextt.nextSibling.nodeName)
//     document.write(prev.previousSibling.nodeName)
// }
// targetNode()



// function targetNode(){
//     var parent = document.getElementById("email");
//     var type = document.getElementById("email");
//     document.write(parent.parentNode.nodeName)
//     document.write(type.nodeType)
// }
// targetNode()