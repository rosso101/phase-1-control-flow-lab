function scuberGreetingForFeet(ride){
  // Write your code here!\
  if (ride <= 400) {
    return "This one is on me!"
  } else  if (ride > 2000 && ride <= 2500){
    return "I will gladly take your thirsty bucks."
  }else if (ride >2500) {
    return "No can do"
  } else {
    return "plese write ride"
  }
}




const city = "NYC"

function ternaryCheckCity(){
  // Write your code here!
  Return city === "NYC" ? "Ok, sounds good." : "No go"
}


const  tip = "generous"

function switchOnCharmFromTip(){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much."
      break
      case " not as generous":
        return "Thank you"
        break
        default:
          return " bye."
  }
}