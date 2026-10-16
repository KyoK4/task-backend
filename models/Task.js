const mongoose = require('mongoose');

// 1. สร้างพิมพ์เขียว (Schema) คล้ายๆ การสร้าง struct ในภาษา C
const taskSchema = new mongoose.Schema({
    // บังคับว่า title ต้องเป็นข้อความ และห้ามเว้นว่าง
    title: {
        type: String,
        required: true
    },
    
    priority: {
    type: String,
    enum: ['low', 'medium', 'high'], // กำหนดให้มีค่าได้แค่ 3 ค่า
    default: 'medium' // ถ้าไม่ส่งค่า priority มา ให้ตั้งเป็น medium อัตโนมัติ
    },

    completed: {
        type: Boolean,
        default: false
    }
});

// 2. แปลงพิมพ์เขียวให้กลายเป็น Model (ชิ้นส่วนที่พร้อมใช้งาน)
const Task = mongoose.model('Task', taskSchema);

// 3. ส่งออกไปให้ไฟล์อื่น (เช่น server.js) เอาไปใช้งาน
module.exports = Task;