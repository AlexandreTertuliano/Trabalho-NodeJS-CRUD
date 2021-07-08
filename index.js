const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const service = require('./src/services')

const router = express.Router()

router.get('/api/v1/notifications', service.getNotification)
router.post('/api/v1/notifications', service.newNotification)
router.delete('/api/v1/notifications/:id', service.deleteNotification)

app.use('/', router)

const porta = process.env.PORT;

app.listen(porta || 8081)