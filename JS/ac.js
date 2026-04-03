const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/web/php/ac.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
                if (data.success) {
                    console.log('Inicio de sesión exitoso');
                    window.location.href = '/web/html/us.html'; // Redirigir a us.html
                } else {
                    console.error('Error en el inicio de sesión');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Ocurrió un error, intenta nuevamente.');
            });
    };

    const redirectToRegister = () => {
        window.location.href = '/web/php/reg.php'; // Cambia esta ruta si es necesario
    };

    return (
        <div className="form-container">
            <h2>Inicia sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Acceder</button>
                <button type="button" onClick={redirectToRegister}>Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

ReactDOM.render(<LoginForm />, document.getElementById('root'));
