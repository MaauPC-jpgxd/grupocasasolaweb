import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'inventario-huawei',
    title: 'Sistema de Inventario Huawei',
    category: 'Gestión empresarial',
    description:
      'Sistema para controlar inventario, movimientos y existencias de equipos tecnológicos entre diferentes sucursales.',
    technologies: ['Laravel', 'PHP', 'SQL Server', 'Chart.js'],
    status: 'Sistema empresarial',
  },
  {
    id: 'base-conocimientos',
    title: 'Base de Conocimientos',
    category: 'Gestión de información',
    description:
      'Plataforma web para organizar, consultar y administrar documentación técnica y procedimientos de una organización.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Cloudinary'],
    status: 'Plataforma web',
  },
  {
    id: 'data-warehouse',
    title: 'Data Warehouse & Analytics',
    category: 'Datos',
    description:
      'Solución de integración y análisis de información empresarial para generar indicadores y facilitar la toma de decisiones.',
    technologies: ['Node.js', 'Express', 'SQL Server', 'ETL'],
    status: 'Análisis de datos',
  },
  {
    id: 'casa-valdez',
    title: 'Aplicación Casa Valdez',
    category: 'Aplicaciones móviles',
    description:
      'Aplicación móvil orientada a ofrecer una experiencia digital para clientes y facilitar el acceso a servicios.',
    technologies: ['Flutter', 'Firebase', 'Android'],
    status: 'Aplicación móvil',
  },
]