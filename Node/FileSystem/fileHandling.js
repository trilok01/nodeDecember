const fs = require('fs');

fs.exists("SampleFile", (exists) => {
    if(exists == true) {
        fs.exists("SampleFile/Sample.txt", (fileExists) => {
            fs.unlink("SampleFile/Sample.txt", (err) => {
                if(err) {
                    console.log("Error Deleting the file");
                } else {
                    console.log("File Deleted...");
                    fs.rmdir("SampleFile", (err) => {
                        if(err) {
                            console.log("Error Deleting the folder");
                        } else {
                            console.log("Folder Deleted...");
                        }
                    });
                }
            });
        });
    }
});
