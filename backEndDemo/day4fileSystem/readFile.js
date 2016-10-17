/**
 * Created by anthonyrogers on 10/14/16.
 */
var fs = require('fs');
var filePath = './mustbebigger.txt';

fs.readFile(filePath, 'utf8',function (err, data) {

    if(err){
        console.log('something is wrong\n' + err.toString());
    }

    else {
        console.log('Reading file\n' + data.toString());
    }
});

// var data = fs.readFileSync(filePath, 'utf8');
// console.log('Sync Reading file\n' + data.toString());

// try{
//     var data = fs.readFileSync(filePath, 'utf8');
//     console.log('Sync Reading file\n' + data.toString());
// }
//
// catch(err){
//     console.log(err);
// }


// var fs = require('fs');
// var filePath = './testfile.txt';
// var newFilePath = './mustbebigger.txt';
// fs.rename(filePath, newFilePath, function(err){
//     if (err)
//     {
//         console.log('We have a problem');
//         //throw err;
//     }else
//     {
//         console.log('Rename completed');
//     }
//     fs.stat(newFilePath, function(err, stats){
//         if (err) {
//             throw err;
//         }else
//         {
//             console.log('file stats ' + newFilePath);
//             console.log(stats);
//         }
//     });
// });

// var fs = require('fs');
// var filePath = './mustbebiggerWrite.html' ;
// var data = `<!DOCTYPE html>
//             <html lang="en">
//             <head>
//               <meta charset="UTF-8">
//               <title>File Write</title>
//             </head>
//             <body>
//               <h1>You Have been Hilleried, Your email will now be Wiped clean for you.
// It's okay The FBI will let you off.</h1>
//             </body>
//             </html>`;
// fs.writeFile(filePath, data, (err) => {
//     if (err) throw err;
//     console.log('It\'s saved!');
// });