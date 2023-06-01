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
exports.generateUserId = exports.generateRandomUserInfo = exports.limitResults = void 0;
const dummy_data_json_1 = __importDefault(require("./dummy-data.json"));
const limitResults = (user, limit) => __awaiter(void 0, void 0, void 0, function* () {
    return user.slice(0, parseInt(limit));
});
exports.limitResults = limitResults;
const generateRandomUserInfo = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const randomIndex = Math.floor(Math.random() * user.length);
    return user[randomIndex];
});
exports.generateRandomUserInfo = generateRandomUserInfo;
const generateUserId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = dummy_data_json_1.default.length;
    const incrementedId = currentId + 1;
    return incrementedId.toString();
});
exports.generateUserId = generateUserId;
