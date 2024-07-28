import multer from "multer";
import { storage } from "../config/multerConfig";

const upload = multer({
    storage: storage,
    fileFilter(req, file, callback) {
        const extensaoImage = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);
        if (extensaoImage) {
            return callback(null, true);
        }
        return callback(null, false);
    },
});

export { upload };