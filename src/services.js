var NOTIFICATIONS = []

const deleteNotification = (req, res) => {
    var id = `${req.params.id}`;
    let valid = false;
    for (let i = 0; i < NOTIFICATIONS.length; i++) {
        if (id == NOTIFICATIONS[i].id) {
            NOTIFICATIONS.splice(i, 1);
            valid = true;
            res.json({message: "notificação apagada com sucesso"})
        }
    }
}

const getNotification = (req, res) => {
    var subjectR = req.query.subject
    var statusR = req.query.status
    var nameR = req.query.name
    var data = [];

    if (subjectR != null) {
        for (let i = 0; i < NOTIFICATIONS.length; i++) {
            if (subjectR == NOTIFICATIONS[i].subject) {
                data.push(NOTIFICATIONS[i])
            }
        }
        res.json({ result: data })
    } else if (nameR != null) {
        for (let i = 0; i < NOTIFICATIONS.length; i++) {
            if (nameR == NOTIFICATIONS[i].name) {
                data.push(NOTIFICATIONS[i])
            }
        }
        res.json({ result: data })

    } else if (statusR != null) {
        for (let i = 0; i < NOTIFICATIONS.length; i++) {
            if (statusR == NOTIFICATIONS[i].status) {
                data.push(NOTIFICATIONS[i])
            }
        }
        res.json({ result: data })
    } else {
        res.json()

    }
}

const newNotification = (req, res) => {
    var body = req.body;

    var data = {
        'id': Math.random().toString(36).substr(2, 9),
        'content': body.content,
        'subject': body.subject,
        'name': body.name,
        'status': body.status,
    }
    NOTIFICATIONS.push(data)
    res.json({ message: "notificação adicionada", notification: data })

}


module.exports = {
    deleteNotification,
    getNotification,
    newNotification,
}
