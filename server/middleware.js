// 注入自定义的登录函数
module.exports = (req, res, next) => {
    console.log('req.body.username', req.body.username);
    if(req.method === 'POST' && req.path === '/login') {
        if(req.body.username === 'jack' && req.body.password ==='123') {
            return res.status(200).json({
                user: {
                    token: 123
                }
            })
        }else {
            return res.status(400).json({message: '用户名或密码错误！'})
        }
    }
    next()
}