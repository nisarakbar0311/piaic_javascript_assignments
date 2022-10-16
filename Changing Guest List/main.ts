let CGLNames = ["Allama Iqbal", "Khadim Hussain Rizvi", "Quaid e Azam", "Saad Hussain Rizvi"];

CGLNames.forEach(name => {
    console.log(`Sir ${name}, Would you like to come to dinner on Friday night.`);
});

const notComingpersons = ["Quaid e Azam", "Khadim Hussain Rizvi"];

notComingpersons.forEach(name => {
    console.log(name);
});

const NewInvitationNames = ["Zia", "Imran"];

CGLNames = CGLNames
            .filter(name => !notComingpersons.includes(name))
            .concat(NewInvitationNames);

CGLNames.forEach(name => {
    console.log(`Sir ${name}, Would you like to come to dinner on Friday night.`);
});