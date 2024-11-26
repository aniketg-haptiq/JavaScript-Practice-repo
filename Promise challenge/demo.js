const fs = require("fs");

fs.readdir("./Data", (err, files) => {
  const myPromise = files.map((filename, index) => {
    return new Promise((resolve, reject) => {
      fs.redFile(`./Data/${filename}`, (err, data) => {
        console.log(filename);
        if (err) reject(err);
        resolve({
          filename,
          data: String(data),
        });
      });
    });
  });

  Promise.all(myPromise).then((fileContetnt) => {
    // console.log(fileContetnt[0]);
    const arrayCt = fileContetnt.map((fileContents) => {
      //   console.log(fileContents);
      const matches = fileContents.data.match(/gotYa/g);
      if (matches) {
        return matches.length;
      } else {
        return 0;
      }
    });
    const oredrArray = arrayCount.sort((a, b) => {
      return a - b;
    });
    console.log(oredrArray);
  });
});

Promise.race(f);
