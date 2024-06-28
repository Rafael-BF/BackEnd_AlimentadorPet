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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDevice = exports.updateDevice = exports.createDevice = exports.getDeviceById = exports.getDevice = exports.getHour = exports.getDevices = void 0;
const client_1 = require("@prisma/client");
const getNextHour_1 = require("../utils/getNextHour");
const prisma = new client_1.PrismaClient();
const getDevices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const devices = yield prisma.device.findMany();
    res.json(devices);
});
exports.getDevices = getDevices;
const getHour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const device = yield prisma.device.findFirst({ where: { id } });
    if (!device) {
        return res.status(404).json({ error: "Device not found" });
    }
    const horario = (0, getNextHour_1.getNextHour)(device.hourFeed);
    res.json({ horario, doorTime: device.doorTime });
});
exports.getHour = getHour;
const getDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const device = yield prisma.device.findMany({ where: { email } });
    if (device) {
        res.json(device);
    }
    else {
        res.status(404).json({ error: "Device not found" });
    }
});
exports.getDevice = getDevice;
const getDeviceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const device = yield prisma.device.findFirst({ where: { id } });
    if (device) {
        res.json(device);
    }
    else {
        res.status(404).json({ error: "Device not found" });
    }
});
exports.getDeviceById = getDeviceById;
const createDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, email, image, hourFeed, doorTime } = req.body;
    const newDevice = yield prisma.device.create({
        data: {
            name,
            description,
            email,
            image,
            hourFeed,
            doorTime,
            amountFood: "VAZIO",
        },
    });
    res.status(201).json(newDevice);
});
exports.createDevice = createDevice;
const updateDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description, image, hourFeed, doorTime } = req.body;
    const updatedDevice = yield prisma.device.update({
        where: { id },
        data: {
            name,
            description,
            image,
            hourFeed,
            doorTime,
        },
    });
    res.json(updatedDevice);
});
exports.updateDevice = updateDevice;
const deleteDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield prisma.device.delete({ where: { id } });
    res.status(204).end();
});
exports.deleteDevice = deleteDevice;
