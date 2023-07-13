const multer = require("multer");
const fs = require("fs")

const multerStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        const path = `${__dirname}/uploads/${req.user._id}`;
        if(!fs.existsSync(path)){
            fs.mkdirSync(path);
        }
        cb(null, `${path}`)
    },
    filename: (req,file,cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${req.user._id}-${Date.now()}.${ext}`)
    }
})

const upload = multer({storage: multerStorage})

module.exports = upload