const User = require('../madels/User')
const bcript = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { json } = require('express/lib/response')


const userController = {
    register: async function (req, res) {


        const selectedUser = await User.findOne({ email:req.body.email })
        if (selectedUser) return res.status(400).send('Email ja registrado')

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcript.hashSync(req.body.password)
        })

        try {
            const saveUser = await user.save()
            res.send(saveUser)
        } catch (error) {
            res.status(400).send(error)
        }


    },
    login: async function (req,res){
        const selectedUser = await User.findOne({ email:req.body.email })
        if (!selectedUser) return res.status(400).send('Dados Incorretos')

        const passwordUsermMtch = bcript.compareSync(req.body.password, selectedUser.password)
        if (!passwordUsermMtch) return res.status(400).send('Dados Incorretos')

        const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin },process.env.TOKEN_SECRET)
        res.header('authorization', token)
        res.send(token)
    }
}

module.exports = userController