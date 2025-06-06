import { useState } from "react";
import { useRouter } from 'next/router';
import { FormField } from "./FormField";
import { EmailField } from "./EmailField";

export function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    confirmarContrasena: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // Nuevo estado para éxito

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false); // Resetear estado de éxito

    if (formData.contrasena !== formData.confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          contrasena: formData.contrasena
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al registrar');
      }

      // Mostrar mensaje de éxito antes de redirigir
      setSuccess(true);
      setFormData({ // Limpiar el formulario
        nombre: '',
        email: '',
        contrasena: '',
        confirmarContrasena: ''
      });

      // Redirigir después de 2 segundos
      //setTimeout(() => {
        //router.push('/login?registro=exitoso');
      //}, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <FormField 
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <EmailField 
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormField
        label="Contraseña"
        type="password"
        name="contrasena"
        value={formData.contrasena}
        onChange={handleChange}
        required
        minLength="6"
      />

      <FormField
        label="Confirmar contraseña"
        type="password"
        name="confirmarContrasena"
        value={formData.confirmarContrasena}
        onChange={handleChange}
        required
      />

      {/* Mensaje de error */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      {/* Mensaje de éxito */}
      {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded border border-green-200">
                ¡Usuario registrado exitosamente!{' '}
                <button 
                onClick={() => router.push('/login?registro=exitoso')}
                className="text-blue-600 hover:underline"
                >
                Ir a login
                </button>
            </div>
)}

      <button
        type="submit"
        disabled={loading || success} // Deshabilitar también cuando es éxito
        className={`w-full text-white py-2 rounded ${
          loading || success ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {loading ? 'Registrando...' : success ? 'Registro exitoso' : 'Crear cuenta'}
      </button>
    </form>
  );
}