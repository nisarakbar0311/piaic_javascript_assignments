const languages = ["Urdu", "English", "Punjabi", "Pashto"];

try {
    if(languages[5]==undefined) {
        throw 'index not exist.';
    }
} catch(e) {
    console.log(e);
}
