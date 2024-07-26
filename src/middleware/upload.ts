import multer from "multer";
import fs from "fs";
import path from "path";

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            const dir = path.join(__dirname, '../../public/upload/users');
            fs.mkdirSync(dir, { recursive: true });
            callback(null, dir);
        },
        filename(req, file, callback) {
            callback(null, Date.now().toString() + '_' + file.originalname);
        },
    }),
    fileFilter(req, file, callback) {
        const extensaoImage = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);
        if (extensaoImage) {
            return callback(null, true);
        }
        return callback(null, false);
    },
});

export { upload };