const personData = {
    "name": "David", 
    "bio": "Software Engineer"
}

export default function handler(req, res) {
    res.status(200).json(personData)
  }
  