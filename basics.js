// Write a loop to print "0. Hello" to "9. Hello" (10 lines)

// write loop here... 

const countUp = () => {
  for (let i=0; i < 10; i++){
    console.log(`${i}.`,"Hello")
  }
}

countUp()

// Write a loop to count down from 10 to 1 (console.log)
// and then write "Blast Off!"

// write loop here... 

const countDown= ()=>{
  for (let i = 10; i>=1; i--){
    console.log(`${i}.`)
    if (i===1) {
      console.log("Blast off!")
    }
  }
}

countDown()

////////////////////////////////////////////////////////////
