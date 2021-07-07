function filterEmployees(data, criteria) {
    let dataParsed = JSON.parse(data);
    let result = '';
    if (criteria !== 'all') {
        let criteriArgs = criteria.split('-');
        let prop = criteriArgs[0];
        let value = criteriArgs[1];
        dataParsed = dataParsed.filter(o => o[prop] == value);
    }
            
    for (let i = 0; i < dataParsed.length; i++) {
        let currObject = dataParsed[i];
        let objectFormated = `${i}. ${currObject['first_name']} ${currObject['last_name']} - ${currObject['email']}` + '\n';
        result += objectFormated;
    }
    return result.trim();
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)