var path = require('path');
var fs = require('fs');

var i = 0;

function moveFile(oldPath, newPath) 
{
    fs.renameSync(oldPath, newPath, function (err){
        if(err){
            throw err;
        }
    });
}

function makeAFolder(_dir, _file)
{
    if(!fs.existsSync(`test/${_dir}`)){
        fs.mkdirSync(`test/${_dir}`);
        moveFile(`test/${_file}`, `test/${_dir}/${_file}`);
    }
    else{
        moveFile(`test/${_file}`, `test/${_dir}/${_file}`);
    }
}

fs.readdir('./test', function(error, filelist) {
    while(i < filelist.length)
{
    var extname = path.extname(filelist[i]);
    var basename = path.basename(filelist[i]);
    if(extname === ".jpg" && basename.indexOf('E') !== -1  )
    {
        if(!fs.existsSync("test/.Editedjpg")){
            fs.mkdirSync("test/.Editedjpg");
            moveFile(`test/${basename}`, `test/.Editedjpg/${basename}`);
        }
        else{
            moveFile(`test/${basename}`, `test/.Editedjpg/${basename}`);
        }
        i++;
        continue;
    }
    makeAFolder(extname, filelist[i]);
    i++;
}
});

//E 처리