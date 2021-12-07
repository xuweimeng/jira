import * as React from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const LoginScreen = () => {
    const login = (params: { username: string; password: string }) => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(async (res) => {
            if (res.ok) {
                console.log('login', res);
            }
        });
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
        console.log({ username, password });
        
        login({ username, password })
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" placeholder="用户名" id="username" />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="password" placeholder="用户名" id="password" />
            </div>
            <button type="submit">登录</button>
        </form>
    );
};

export default LoginScreen;
