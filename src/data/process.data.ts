import type { ProcessStep } from '../types/process'

export const processSteps: ProcessStep[] = [
  {
    id: 'diagnostico',
    number: '01',
    title: 'Conocemos tu necesidad',
    description:
      'Analizamos el problema, los objetivos y las necesidades de tu negocio para entender qué solución necesitas realmente.',
  },
  {
    id: 'propuesta',
    number: '02',
    title: 'Diseñamos la solución',
    description:
      'Definimos una propuesta tecnológica con las herramientas y procesos adecuados para tu proyecto.',
  },
  {
    id: 'desarrollo',
    number: '03',
    title: 'Desarrollamos e implementamos',
    description:
      'Construimos, configuramos o implementamos la solución buscando estabilidad, seguridad y facilidad de uso.',
  },
  {
    id: 'seguimiento',
    number: '04',
    title: 'Acompañamos tu proyecto',
    description:
      'Damos seguimiento a la solución para detectar oportunidades de mejora y mantenerla funcionando correctamente.',
  },
]