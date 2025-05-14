const data = [
    { name: "Aziz", info: { age: 22, city: "Lahore" }, courses: ["JS", "React"] },
    { name: "Ali", info: { age: 25, city: "Karachi" }, courses: ["Python", "Django"] },
    { name: "Sarah", info: { age: 28, city: "Islamabad" }, courses: ["HTML", "CSS"] }
  ];
  
  // Destructure each object in the array:
  // - Extract name, age, city
  // - Extract first and second course from courses array
  // Then log all the details
  

  for (const {name, info: {age , city}, courses: [course1, course2]} of data ) {
    console.log(`My name is ${name}, ${age} years old, joining ${course1} & ${course2}`);
  }    