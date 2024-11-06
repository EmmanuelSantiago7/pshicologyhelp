import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Maneja el inicio de sesión aquí (ej. enviar datos a un API)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')" }}>
      <div className="flex justify-end">
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <span className="text-sm text-gray-900">Hola de Nuevo!</span>
                <h1 className="text-2xl font-bold">Ingresa tu Cuenta</h1>
              </div>
              <div className="mt-5">
                <label className="block text-md mb-2" htmlFor="email">Email</label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label className="block text-md mb-2" htmlFor="password">Contraseña</label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <input className="cursor-pointer" type="checkbox" name="rememberme" />
                  <span className="text-sm">Recuerdame</span>
                </div>
                <span className="text-sm text-blue-700 hover:underline cursor-pointer">He olvidado mi cuenta?</span>
              </div>
              <div className="">
                <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Inicia aqui!</button>
              </div>
            </form>
            <p className="mt-8">Aun no tienes una cuenta? <span className="cursor-pointer text-sm text-blue-600">Registrate!</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

