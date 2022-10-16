let MGLNames = ["Allama Iqbal", "Khadim Hussain Rizvi", "Quaid e Azam", "Saad Hussain Rizvi"];

MGLNames.forEach(name => {
    console.log(`Sir ${name}, Would you like to come to dinner on Friday night.`);
});

const MGnotComingpersons = ["Quaid e Azam", "Khadim Hussain Rizvi"];

MGnotComingpersons.forEach(name => {
    console.log(name);
});

const MGNewInvitationNames = ["Zia", "Imran"];

MGLNames = MGLNames
            .filter(name => !MGnotComingpersons.includes(name))
            .concat(MGNewInvitationNames);

            MGLNames.forEach(name => {
    console.log(`Sir ${name}, Would you like to come to dinner on Friday night.`);
});

MGLNames.unshift("Ubaid");
MGLNames.splice(Math.round(MGLNames.length/2), 0, "Saleem");
MGLNames.push("Saad");
MGLNames.forEach(name => {
    console.log(`Sir ${name}, Would you like to come to a big dinner on Friday night.`);
});
