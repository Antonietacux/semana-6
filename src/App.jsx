import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/objetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', fontFamily: 'Segoe UI' }}>
            <HeaderClase tituloTema="EL ECOSISTEMA" nombreDocente="María Antonieta Beatriz Cux Morales" horario="Lunes a Viernes de 8:00 a 8:30AM" />
            <ObjetivosCard competencia="Construir interfaces modulares" indicadorLogro="Utiliza props correctamente" />
            <ActividadItem tituloActividad="Actividad 1" duracion="25 min" etapaDidactica="Construcción" />
        </div>
    );
}

export default App;

