import React from 'react';

function ActividadItem({ tituloActividad, duracion, etapaDidactica }) {
    return (
        <div style={{ border: '1px solid #e2e8f0', padding: '12px 15px', borderRadius: '6px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff' }}>
            <div>
                <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75em', fontWeight: 'bold' }}>{etapaDidactica}</span>
                <h4 style={{ margin: '5px 0 0 0', color: '#1e293b', fontSize: '0.95em' }}>{tituloActividad}</h4>
            </div>
            <span style={{ fontSize: '0.85em', color: '#326dc0' }}>⏱️ {duracion}</span>
        </div>
    );
}


export default ActividadItem;
