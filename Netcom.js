function myTeam() {
    console.log("Ganesh\nDurai\nSteve\nAmoshini")
}

var mdName = "Prakash"

// myTeam();   // calling a function.

// Single Export
// module.exports = myTeam; // export this function.  // Never use () brakets while exporting...

// MultiExport
module.exports.myTeam = myTeam;
module.exports.mdName = mdName;



module.exports.HR =  "Geetha"
