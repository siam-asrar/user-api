"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("./users.service"));
const dummy_data_json_1 = __importDefault(require("./dummy-data.json"));
const users_utils_1 = require("./users.utils");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit } = req.query;
    let result;
    if (typeof limit === 'string') {
        result = yield users_service_1.default.limitUser(dummy_data_json_1.default, parseInt(limit));
    }
    else {
        result = dummy_data_json_1.default;
    }
    try {
        res.status(200).json({
            success: true,
            message: `User List: ${result.length} out of ${dummy_data_json_1.default.length} Users Loaded!`,
            data: result
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to load User List',
        });
    }
});
const generateRandomUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_service_1.default.generateRandomUser(dummy_data_json_1.default);
    try {
        res.status(200).json({
            success: true,
            message: `Random User Data: Showing for user id - ${result.id}`,
            data: result
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to load User data',
        });
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const id = yield (0, users_utils_1.generateUserId)();
    const result = dummy_data_json_1.default.push(user);
    try {
        user.id = id;
        res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to create user',
        });
    }
});
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { user } = req.body;
    let result;
    result = dummy_data_json_1.default.find(data => data.id === id);
    if (result) {
        result = dummy_data_json_1.default.push(result, user);
    }
    else {
        result = 'No matching user found by ${id}';
    }
    try {
        res.status(200).json({
            success: true,
            message: `User Data updated for user id - ${id}`,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to load User data',
        });
    }
});
const bulkUpdateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [user] = req.body;
    const result = dummy_data_json_1.default.filter(data => data.id === user.id);
    try {
        res.status(200).json({
            success: true,
            message: `User Data bulk updated`,
            data: result.push(user),
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to load User data',
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = dummy_data_json_1.default.filter(data => data.id !== id);
    try {
        res.status(200).json({
            success: true,
            message: `User Data deleted for user id - ${id}`,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to load User data',
        });
    }
});
exports.default = {
    getAllUsers,
    generateRandomUser,
    createUser,
    updateUserById,
    bulkUpdateUsers,
    deleteUser
};
