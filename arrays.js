// Given the following array, output each fruit

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'grapes']

// write loop here...

const fruitLoops = ()=>{
  fruits.forEach((item)=>{
    console.log(item)
  })
}

fruitLoops()

// Given the following array, output each student's first name

const students = [
  {
    firstName: 'Ilan',
    lastName: 'Vaks',
    gender: 'male',
  },
  {
    firstName: 'Kaniel',
    lastName: 'Tapper',
    gender: 'male',
  },
  {
    firstName: 'Meghann',
    lastName: 'Stamper',
    gender: 'female',
  },
  {
    firstName: 'Meghann',
    lastName: 'Stamper',
    gender: 'female',
  },
]

// write loop here....

const studentLoop = ()=>{
  students.forEach((obj)=>{
    console.log(obj.firstName)
  })
}

studentLoop()

