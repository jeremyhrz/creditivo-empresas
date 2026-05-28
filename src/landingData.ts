/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Segment, Benefit, Step, RequirementTab, FAQItem } from './types';

export const SEGMENTS: Segment[] = [
  {
    id: 'mayorista',
    title: 'Creditivoo Mayorista',
    tagline: 'Compra comercial a gran escala',
    description: 'Para clientes con compras frecuentes, volumen comercial o intención de comprar al mayor para impulsar su negocio.',
    bullets: [
      'Puedes aplicar aunque no hayas comprado antes en IVOO.',
      'El historial de compra en IVOO ayuda en la evaluación, pero no es limitante.',
      'Carga tus soportes comerciales y estados financieros.',
      'Creditivoo evalúa tu perfil minuciosamente y te asigna una línea de compra.'
    ],
    ctaText: 'Solicitar como mayorista',
    badgeText: 'Perfil Mayorista',
    badgeStyle: 'emerald'
  },
  {
    id: 'emprendedor',
    title: 'Creditivoo Emprendedores',
    tagline: 'Para comerciantes independientes',
    description: 'Para personas que compran tecnología, electrodomésticos y más productos para vender y facturar por su cuenta.',
    bullets: [
      'Ideal si vendes por WhatsApp, Instagram, Marketplace, tienda física o referidos.',
      'No necesitas tener una empresa formalmente registrada.',
      'RIF personal activo y vigente es obligatorio.',
      'Debes demostrar actividad comercial real mediante soportes gráficos o de ventas.'
    ],
    ctaText: 'Solicitar como emprendedor',
    badgeText: 'Emprendedores',
    badgeStyle: 'cyan'
  },
  {
    id: 'nomina',
    title: 'Creditivoo Nómina',
    tagline: 'Beneficio exclusivo para colaboradores',
    description: 'Una opción de financiamiento exclusiva para los trabajadores de nuestras empresas afiliadas.',
    bullets: [
      'La empresa se utiliza únicamente como medio de validación laboral.',
      'Sin descuento por nómina en este MVP (el pago lo autogestiona el colaborador).',
      'Solicitud directa, simple y guiada desde tu celular.',
      'Línea de compra personalizada y asignada de forma manual según tu perfil.'
    ],
    ctaText: 'Activar con mi empresa',
    badgeText: 'Beneficio Laboral',
    badgeStyle: 'indigo'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'perfil',
    title: 'Línea de compra según tu perfil',
    description: 'No eliges un monto rígido. Nuestro equipo evalúa tu perfil e información financiera para asignarte la línea idónea.'
  },
  {
    id: 'celular',
    title: 'Solicitud simple desde el celular',
    description: 'Completa tus datos personales, valida tu identidad mediante selfie y sube tus documentos sin trámites burocráticos.'
  },
  {
    id: 'ivoo',
    title: 'Pensado para comprar en IVOO',
    description: 'Adquiere productos de tecnología, electrodomésticos, hogar, entretenimiento y más en nuestras tiendas y canales digitales.'
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Crea tu cuenta',
    description: 'Regístrate ingresando tu número de teléfono celular, dirección de correo electrónico y una contraseña segura.'
  },
  {
    number: 2,
    title: 'Elige tu perfil',
    description: 'Selecciona la modalidad que mejor se adapte a ti: Mayorista, Emprendedor o Colaborador de una empresa afiliada.'
  },
  {
    number: 3,
    title: 'Completa tus datos',
    description: 'Ingresa la información personal, comercial o de relación laboral correspondiente a tu perfil solicitado.'
  },
  {
    number: 4,
    title: 'Sube tus documentos',
    description: 'Carga una foto nítida de tu cédula, RIF, soportes de ventas o la constancia de trabajo digital pertinente.'
  },
  {
    number: 5,
    title: 'Recibe tu línea asignada',
    description: 'Nuestro equipo de analistas revisará tu información manualmente y te asignará la línea de crédito correspondiente.'
  }
];

export const REQUIREMENTS: RequirementTab[] = [
  {
    id: 'mayorista',
    label: 'Mayoristas',
    title: 'Requisitos para Creditivoo Mayorista',
    description: 'Si realizas compras comerciales recurrentes, prepara esta documentación para una evaluación fluida.',
    documents: [
      'Cédula de identidad del representante legal o titular.',
      'RIF personal o de la empresa obligatorio y vigente.',
      'Datos descriptivos de la actividad comercial.',
      'Soportes comerciales (facturas de compra, fotos de inventario, referencias o movimientos bancarios).',
      'Registro Mercantil (aplica solo si solicitas como persona jurídica).'
    ]
  },
  {
    id: 'emprendedor',
    label: 'Emprendedores',
    title: 'Requisitos para Creditivoo Emprendedores',
    description: '¿Vendes por tu cuenta de forma independiente? Estos son los documentos para validar tu actividad social o digital.',
    documents: [
      'Cédula de identidad laminada.',
      'RIF personal obligatorio, activo y actualizado.',
      'Selfie o prueba de vida para verificación de la identidad digital.',
      'Soportes visuales de actividad (capturas de WhatsApp, Instagram, catálogos digitales o reportes de ventas).',
      'Facturas de proveedores o referencias comerciales si dispone de ellas.'
    ]
  },
  {
    id: 'nomina',
    label: 'Nómina Colaborador',
    title: 'Requisitos para Colaboradores (Nómina)',
    description: 'Si trabajas en una organización afiliada a nuestro programa de beneficios corporativos.',
    documents: [
      'Cédula de identidad legible.',
      'Selfie o prueba de vida en alta resolución.',
      'Código de empresa afiliada (solicítalo al área de Recursos Humanos de tu empresa).',
      'Constancia digital de trabajo o un soporte que valide tu relación laboral activa.',
      'Datos personales y de contacto actualizados.'
    ]
  },
  {
    id: 'empresas',
    label: 'Empresas / Aliados',
    title: 'Para Empresas que deseen Afiliarse',
    description: 'Ofrece financiamiento alternativo a tus trabajadores como un beneficio laboral corporativo de alto valor.',
    documents: [
      'RIF de la empresa jurídica vigente.',
      'Datos completos de contacto del representante o encargado de Recursos Humanos.',
      'Cédula de identidad del representante legal.',
      'Registro Mercantil o acta constitutiva simplificada.',
      'Listado básico de colaboradores propuestos para el programa piloto de Creditivoo Nómina.'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: '¿Creditivoo es un banco?',
    answer: 'No. Creditivoo no es un banco ni una tarjeta de crédito tradicional. Es una solución de financiamiento propia y directa de IVOO, diseñada para que puedas adquirir los productos disponibles en nuestras tiendas aplicando a una línea de compra evaluada a tu medida.'
  },
  {
    id: 2,
    question: '¿El crédito se aprueba automáticamente?',
    answer: 'No en este MVP. Valoramos un análisis responsable y humano. Nuestro equipo de expertos revisa de forma manual cada solicitud, evalúa los soportes que cargas y te asigna una línea disponible óptima según los datos de tu perfil.'
  },
  {
    id: 3,
    question: '¿Puedo solicitar como mayorista si nunca antes he comprado en IVOO?',
    answer: '¡Por supuesto! No tener historial de compras en IVOO no limita tu solicitud. Si ya has comprado con nosotros anteriormente, esa información puede ser de utilidad para complementar la evaluación, pero no es de carácter obligatorio para aplicar.'
  },
  {
    id: 4,
    question: '¿El RIF es obligatorio para hacer la solicitud?',
    answer: 'Sí. Para los perfiles de Creditivoo Mayorista y Creditivoo Emprendedores, contar con el Registro de Información Fiscal (RIF) activo y vigente es un requisito de carácter obligatorio para formalizar el proceso.'
  },
  {
    id: 5,
    question: '¿Necesito tener una firma personal o empresa registrada para aplicar como emprendedor?',
    answer: 'No. Puedes aplicar perfectamente como un cliente comercial o comerciante independiente. El único requisito fiscal es tener tu RIF personal y poder demostrar de manera práctica que realizas actividad comercial real.'
  },
  {
    id: 6,
    question: '¿Qué es Creditivoo Nómina?',
    answer: 'Es un beneficio de valor para colaboradores de organizaciones afiliadas a IVOO. La empresa participa únicamente como ente validador de la relación laboral de la persona, simplificando significativamente los trámites de evaluación.'
  },
  {
    id: 7,
    question: '¿Creditivoo Nómina realiza el cobro mediante descuento de nómina directo?',
    answer: 'No en esta primera etapa (MVP). La empresa no gestiona deducciones del sueldo. El colaborador realiza los pagos de manera independiente guiado por el sistema, y la empresa solo actúa para validar el estatus laboral activo.'
  },
  {
    id: 8,
    question: '¿El solicitante puede elegir el monto exacto de la línea de crédito?',
    answer: 'No de manera directa. En Creditivoo no seleccionas una suma aleatoria. Tú completas tu postulación y adjuntas tus soportes financieros o comerciales, y nuestro departamento de riesgos evalúa tu capacidad de pago para otorgarte la mayor línea posible.'
  },
  {
    id: 9,
    question: '¿En dónde puedo gastar mi línea aprobada de Creditivoo?',
    answer: 'Tu línea Creditivoo está exclusivamente habilitada para realizar compras de productos en las tiendas físicas de IVOO a nivel nacional, así como mediante la app móvil oficial y los canales de atención comercial digital autorizados.'
  },
  {
    id: 10,
    question: '¿Qué ocurre si alguno de mis documentos cargados tiene un error o no es legible?',
    answer: 'No te preocupes. Si una foto sale borrosa o falta algún soporte indispensable, nuestro equipo te enviará una notificación con instrucciones claras para que puedas re-cargar el documento correspondiente de forma rápida y continuar con tu revisión.'
  }
];
