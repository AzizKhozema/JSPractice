const student = {
    id: 12,
    name: "Aziz",
    scores: {
      math: 95,
      english: 88
    },
    contact: {
      email: "aziz@example.com",
      socials: {
        twitter: "@aziz"
      }
    }
  };

  const {name, scores: {math:mathScore}, contact :{socials: {twitter:twitterHandle}}} = student;
  console.log(`${name}, ${mathScore}, ${twitterHandle}`)
  
  // Destructure the following:
  // - name
  // - scores.math as mathScore
  // - contact.socials.twitter as twitterHandle
  // Then log them all