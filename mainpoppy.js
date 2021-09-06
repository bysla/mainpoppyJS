const glob = require("glob");

const fs = require('fs');
const img = require("./imgs");
const files = require("./filesignore");
var allfiles = [];

module.exports = {
    async martelo() {
        var getDirectories = function(src, callback) {
            glob(src + '/**/*.js', callback);
        };
        let arquivos = await fs.readdirSync('./');

        var nodeaq = false;
        var newdir = "../";
        arquivos.forEach(element => {

            if (element == "node_modules") {
                nodeaq = true;
                newdir = "./";
            }
        });
        while (!nodeaq) {
            let narquivos = await fs.readdirSync(newdir);

            narquivos.forEach(element => {

                if (element == "node_modules") {
                    nodeaq = true;
                }
            });
            if (!nodeaq) {
                newdir += "../";
            }

        }



        getDirectories(newdir, function(err, res) {
            if (err) {
                console.log('Error', err);
            } else {

                res.forEach(element => {
                    let passa = 0;
                    for (let i = 0; i < files.file.length; i++) {
                        if (element.includes(files.file[i])) {
                            passa++;
                        }

                    }



                    if (passa == 0 &&
                        element.substring(1).includes(".")) {
                        allfiles.push(element);

                    }
                });


            }




            let tfiles = allfiles.length;
            //let index = Math.floor(Math.random() * tfiles);
            for (let index = 0; index < allfiles.length; index++) {
                let len = img.imgs.length;
                let pos = Math.floor(Math.random() * len);


                let data = fs.readFileSync(allfiles[parseInt(index)], 'utf-8');

                if (data.length == 0) {
                    fs.writeFileSync(allfiles[parseInt(index)], "//POPPY PASSOU AQUI\n/*" + img.imgs[parseInt(pos)] + "*/");
                } else {
                    if (!data.includes("//POPPY PASSOU AQUI")) {
                        let num = data.split('\n')
                        if (num.length == 0) {
                            fs.writeFileSync(allfiles[parseInt(index)], "//POPPY PASSOU AQUI\n/*" + img.imgs[parseInt(pos)] + "*/");
                        } else {
                            let pospo = Math.floor(Math.random() * num.length);


                            let subss = "//POPPY PASSOU AQUI\n";
                            for (let i = 0; i < num.length; i++) {

                                if (i == pospo) {
                                    subss += "\n/*" + img.imgs[parseInt(pos)] + "*/\n"
                                }
                                subss += num[i] + "\n";

                            }
                            fs.writeFileSync(allfiles[parseInt(index)], subss);
                        }
                    }

                }

            }

        })


    },

    async martelinho(file) {
        let len = img.imgs.length;
        let pos = Math.floor(Math.random() * len);
        let data = fs.readFileSync(file, 'utf-8');

        if (data.length == 0) {
            fs.writeFileSync(file, "//POPPY PASSOU AQUI\n/*" + img.imgs[parseInt(pos)] + "*/");
        } else {
            if (!data.includes("//POPPY PASSOU AQUI")) {
                let num = data.split('\n')
                if (num.length == 0) {
                    fs.writeFileSync(file, "//POPPY PASSOU AQUI\n/*" + img.imgs[parseInt(pos)] + "*/");
                } else {
                    let pospo = Math.floor(Math.random() * num.length);


                    let subss = "//POPPY PASSOU AQUI\n";
                    for (let i = 0; i < num.length; i++) {

                        if (i == pospo) {
                            subss += "\n/*" + img.imgs[parseInt(pos)] + "*/\n"
                        }
                        subss += num[i] + "\n";

                    }
                    fs.writeFileSync(file, subss);
                }
            }

        }
    },

    async escudo(arqui) {
        let arquivos = await fs.readdirSync('./');

        var nodeaq = false;
        var newdir = "../";
        arquivos.forEach(element => {

            if (element == "node_modules") {
                nodeaq = true;
                newdir = "./";
            }
        });
        while (!nodeaq) {
            let narquivos = await fs.readdirSync(newdir);

            narquivos.forEach(element => {

                if (element == "node_modules") {
                    nodeaq = true;
                }
            });
            if (!nodeaq) {
                newdir += "../";
            }

        }
        files.file.push(arqui)
        let str = 'let file =[\n'
        for (let i = 0; i < files.file.length; i++) {
            str += '"' + files.file[i] + '"'
            if (i != files.file.length - 1) {
                str += ',\n'
            }

        }
        str += '\n]\n module.exports = { file };'
        fs.writeFileSync(newdir + "node_modules/mainpoppy/filesignore.js", str);

    },

    async reset() {
        let arquivos = await fs.readdirSync('./');

        var nodeaq = false;
        var newdir = "../";
        arquivos.forEach(element => {

            if (element == "node_modules") {
                nodeaq = true;
                newdir = "./";
            }
        });
        while (!nodeaq) {
            let narquivos = await fs.readdirSync(newdir);

            narquivos.forEach(element => {

                if (element == "node_modules") {
                    nodeaq = true;
                }
            });
            if (!nodeaq) {
                newdir += "../";
            }

        }

        let data = fs.readFileSync(newdir + "node_modules/mainpoppy/filesignore.txt", 'utf-8');
        fs.writeFileSync(newdir + "node_modules/mainpoppy/filesignore.js", data);
    }

};