function isCollegeEmail(email){
    const regex = /^([0-9]+)([A-Za-z]+)([0-9]+)\.([A-Za-z]+)@sagarmatha\.edu\.np$/;
    if(email.match(regex)) return true
    else return false
}

  