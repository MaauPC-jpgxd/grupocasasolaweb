import type { Service } from '../types/service'

export const services: Service[] = [
  {
    id: 'soporte',
    title: 'Soporte técnico',
    description:
      'Atención y solución de problemas tecnológicos para mantener tus equipos y operaciones funcionando.',
    icon: '01',
    features: [
      'Soporte en sitio',
      'Configuración de equipos',
      'Instalación de software',
    ],
  },
  {
    id: 'reparacion',
    title: 'Reparación de equipos',
    description:
      'Diagnóstico, mantenimiento y reparación de equipos de cómputo para prolongar su vida útil.',
    icon: '02',
    features: [
      'Diagnóstico de fallas',
      'Mantenimiento preventivo',
      'Mantenimiento correctivo',
    ],
  },
  {
    id: 'web',
    title: 'Desarrollo web',
    description:
      'Creamos aplicaciones y plataformas web adaptadas a las necesidades de cada negocio.',
    icon: '03',
    features: [
      'Sitios empresariales',
      'Aplicaciones web',
      'Sistemas personalizados',
    ],
  },
  {
    id: 'mobile',
    title: 'Aplicaciones móviles',
    description:
      'Desarrollo de aplicaciones móviles para llevar tus servicios y procesos a cualquier lugar.',
    icon: '04',
    features: [
      'Aplicaciones Android',
      'Aplicaciones multiplataforma',
      'Integración con servicios web',
    ],
  },
  {
    id: 'pos',
    title: 'Puntos de venta',
    description:
      'Soluciones para controlar ventas, productos, inventario y operaciones de tu negocio.',
    icon: '05',
    features: [
      'Control de ventas',
      'Gestión de inventario',
      'Reportes y operación',
    ],
  },
  {
    id: 'datos',
    title: 'Análisis de datos',
    description:
      'Convertimos información de tu negocio en reportes y herramientas que facilitan la toma de decisiones.',
    icon: '06',
    features: [
      'Dashboards',
      'Reportes automatizados',
      'Análisis de información',
    ],
  },
]