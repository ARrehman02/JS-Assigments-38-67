// Chap 38-42

// function ab(){
//     var a=prompt("Enter Your Base");
//     var b=prompt("Enter Your power");
//     var result=Math.pow(a,b);
//     alert(result);
// }

// function LeapYear(){
//     var year=document.getElementById("year").value;
//     document.getElementById("GFG").innerHTML
//     =(year % 100 === 0) ? (year % 400 === 0) 
//     : (year % 4 === 0); 
// } 


// var a=+prompt("Enter the value of a")
// var b=+prompt("Enter the value of b")
// var c=+prompt("Enter the value of c")
// function triangle(){
//     var s=( a + b + c ) / 2
//     var area= s*(s - a)*(s - b)*(s - c)
//     alert("Area of Triangle "+area)
// }
// triangle();


// function mainFuntion(mainResult1,mainResult2){
//     var marks1 = +prompt("Enter marks for 1st Subject");
//     var marks2 = +prompt("Enter marks for 2nd Subject");
//     var marks3 = +prompt("Enter marks for 3rd Subject");
//         function average(avg){
//             avg = (marks1+marks2+marks3)/3
//             return avg
//         }
//         function percentage(perr){
//             perr = ((marks1+marks2+marks3)/300)*100;
//             return perr
//         }
//         mainResult1 = average();
//         mainResult2 = percentage();
//         alert("Average of marks is: "+mainResult1+"\n"+"Percentage is: "+ mainResult2+"%")
// }
// mainFuntion();

// var NewArrayOne = ["a","b","c","d","e"];
// alert("Array: "+NewArrayOne)
// var i = 0;
// do {
//   if(NewArrayOne === "c"){
//       alert(NewArrayOne.length);
//   }
// }
// while (i < NewArrayOne.length);

// function removeVowels(){
//     var strOne = ["apple","banana","grapes","incognito","universe"];                          
//    string = strOne.map(x=>x.replace( /[aeiou]/g, '' ));              
//   alert(string);
// }
// removeVowels();

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
    
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
//   alert("Occurance of vowels: "+findOccurrences());

// var distance = +prompt("Enter distance between two cities in KM");
// function ConvertToMeter(){
//     var meter = distance*1000;
//     return meter
// }
// function ConvertToFeet(){
//     var feet = distance*3281;
//     return feet
// }function ConvertToInches(){
//     var inches = distance*39370
//     return inches
// }function ConvertToCentiMeter(){
//     var cm = distance*100000
//     return cm
// }
// alert(distance+"KM into meter is: "+ConvertToMeter());
// alert(distance+"KM into feet is: "+ConvertToFeet());
// alert(distance+"KM into inches is: "+ConvertToInches());
// alert(distance+"KM into centimeter is: "+ConvertToCentiMeter());

// function CalculateOvertime(){
//     var WorkTime = +prompt("enter your complete working time in hours")
//     var pay = 1000;
//     alert("Your initial pay was: "+pay)
//     if (WorkTime > 40){
//         for(i = 41; i <= WorkTime; i++){
//             pay += 12;
//         }
//         alert("After over time, your pay is: "+pay);
//     }
//     else{
//         alert("no overtime");
//     }
// }
// CalculateOvertime()

// function notes(){
//     var withdraw = +prompt("enter amount you want to withdraw")
//     var hundred = withdraw/100;
//     var fifty = ((withdraw % 100) / 50);
//     var twenty = (((withdraw % 100) % 50) / 10);
//     var ten = (((withdraw % 100) % 50) % 10);
//     alert("Your amount is: "+withdraw+"\nYou'll have "+Math.floor(hundred)+" note(s) of hundred\n"+Math.floor(fifty)+" note(s) of fifty\n"+Math.floor(twenty)+" note(s) of twenty\nAnd "+Math.floor(ten)+" note(s) of ten");
//     var ten = (((withdraw % 100) % 50) / 10);
//     alert("Your amount is: "+withdraw+"\nYou'll have "+Math.floor(hundred)+" note(s) of hundred\n"+Math.floor(fifty)+" note(s) of fifty\n"+"And "+Math.floor(ten)+" note(s) of ten");
// }
// notes()