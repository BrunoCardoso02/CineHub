import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
    destination(req, file, callback) {
        const dir = path.join(__dirname, '../../public/upload/users');
        fs.mkdirSync(dir, {recursive: true})
        callback(null, dir);
    },
    filename(req, file, callback) {
        const time = new Date().getTime();
        callback(null, `${time}_${file.originalname}`);
    },
})

export { storage };