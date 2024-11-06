import React, { useState } from 'react';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Maneja el registro aquí (ej. enviar datos a un API)
    console.log('Nombre Completo:', fullName);
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
                <span className="text-sm text-gray-900">Crear una cuenta</span>
                <h1 className="text-2xl font-bold">Registra una nueva cuenta</h1>
              </div>
              <div className="mt-5">
                <label className="block text-md mb-2" htmlFor="fullName">Nombre Completo</label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="text"
                  name="fullName"
                  placeholder="Ingresa tu nombre completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label className="block text-md mb-2" htmlFor="email">Email</label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="email"
                  placeholder="Ingresa tu Email"
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
              <div className="">
                <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Registrate ahora</button>
              </div>
            </form>
            <p className="mt-8">Ya tienes una cuenta? <span className="cursor-pointer text-sm text-blue-600">Inicia Sesiòn</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
