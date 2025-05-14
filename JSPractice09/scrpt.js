const students = [
    { 
      name: "Aziz", 
      details: { age: 22, city: "Lahore" }, 
      subjects: ["Math", "Physics"] 
    },
    { 
      name: "Ali", 
      details: { age: 24 }, 
      subjects: ["Biology"] 
    },
    { 
      name: "Sarah", 
      details: null, 
      subjects: undefined 
    }
  ];
  
  // 🔹 For each student:
  // - Extract name
  // - Extract age (default to 18 if missing)
  // - Extract city (default to "Unknown")
  // - Extract first and second subject (default to "N/A")
  // Then log like this:
  // "Aziz is 22 years old from Lahore and takes Math & Physics"
  // "Ali is 24 years old from Unknown and takes Biology & N/A"
  // "Sarah is 18 years old from Unknown and takes N/A & N/A"

//   for (const { name, details = {}, subjects = [] } of students) {
//     const { age = 18, city = "Unknown" } = details;
//     const [firstSub = "N/A", secondSub = "N/A"] = subjects;
  
//     console.log(`${name} is ${age} years old from ${city} and takes ${firstSub} & ${secondSub}`);
//   }
  

for (const student of students) {
    const { name } = student;
    const { age = 18, city = "Unknown" } = student.details ?? {}
    const [firstSub = "N/A", secondSub = "N/A"] = student.subjects ?? []
  
    console.log(`${name} is ${age} years old from ${city} and takes ${firstSub} & ${secondSub}`);
  }

  