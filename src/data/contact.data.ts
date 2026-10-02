import type { ContactItem, ContactOption } from '../types/contact'

export const contactItems: ContactItem[] = [
  {
    id: 'email',
    label: 'Correo',
    value: 'grupocasasolainformes@gmail.com',
    href: 'mailto:grupocasasolainformes@gmail.com',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Solicitar por WhatsApp',
    href: '#',
  },
  {
    id: 'ubicacion',
    label: 'Atención',
    value: 'Ciudad de México y Estado de México',
  },
]

export const contactOptions: ContactOption[] = [
  {
    id: 'soporte',
    label: 'Soporte técnico',
  },
  {
    id: 'desarrollo',
    label: 'Desarrollo de software',
  },
  {
    id: 'inventario',
    label: 'Sistemas / puntos de venta',
  },
  {
    id: 'datos',
    label: 'Análisis de datos',
  },
  {
    id: 'iot',
    label: 'Soluciones IoT',
  },
  {
    id: 'otro',
    label: 'Otro proyecto',
  },
]