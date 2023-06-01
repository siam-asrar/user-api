"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("./users.controller"));
const router = express_1.default.Router();
router.get('/all', users_controller_1.default.getAllUsers);
router.get('/random', users_controller_1.default.generateRandomUser);
router.post('/save', users_controller_1.default.createUser);
router.patch('/:id', users_controller_1.default.updateUserById);
router.put('/bulk-update', users_controller_1.default.bulkUpdateUsers);
router.delete('/:id', users_controller_1.default.deleteUser);
exports.default = router;
